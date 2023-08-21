"use client";
import useSWR from "swr";
import Collection from "@/components/collection";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Loading from "@/components/loader";
import Pagination from "@/components/pagination";
import SearchModal from "@/components/searchModal";
import { Character } from "@/types/character";
import { ChangeEvent, useEffect, useState } from "react";
import { API_URL, fetchCharacters } from "@/utils/api";
import CardList from "@/components/characterList";

export default function Home({}) {
  const ITEMS_PER_PAGE = 12;

  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  let { data, error, isLoading } = useSWR(
    `${API_URL}api/characters`,
    fetchCharacters
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
    isLoading = true;
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
    isLoading = true;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredCharacters([]);
    } else {
      setFilteredCharacters(
        characters.filter(
          (character) =>
            character.name.toLowerCase().includes(value.toLowerCase()) ||
            character.house.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const getCharacters = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCharacters = Array.from(characters).slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
    isLoading = false;
    return currentCharacters;
  };

 
  useEffect(() => {
    const dummyCharacters: Character[] = [
      {
        id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
        name: "Harry Potter",
        alternate_names: ["The Boy Who Lived", "The Chosen One"],
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "31-07-1980",
        yearOfBirth: 1980,
        wizard: true,
        ancestry: "half-blood",
        eyeColour: "green",
        hairColour: "black",
        wand: { wood: "holly", core: "phoenix feather", length: 11 },
        patronus: "stag",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/harry.jpg",
      },
      {
        id: "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
        name: "Hermione Granger",
        alternate_names: [],
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "19-09-1979",
        yearOfBirth: 1979,
        wizard: true,
        ancestry: "muggleborn",
        eyeColour: "brown",
        hairColour: "brown",
        wand: { wood: "vine", core: "dragon heartstring", length: 10.75 },
        patronus: "otter",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Emma Watson",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
      },
      {
        id: "c3b1f9a5-b87b-48bf-b00d-95b093ea6390",
        name: "Ron Weasley",
        alternate_names: ["Dragomir Despard"],
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "01-03-1980",
        yearOfBirth: 1980,
        wizard: true,
        ancestry: "pure-blood",
        eyeColour: "blue",
        hairColour: "red",
        wand: { wood: "willow", core: "unicorn tail-hair", length: 14 },
        patronus: "Jack Russell terrier",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Rupert Grint",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/ron.jpg",
      },
      {
        id: "af95bd8a-dfae-45bb-bc69-533860d34129",
        name: "Draco Malfoy",
        alternate_names: [],
        species: "human",
        gender: "male",
        house: "Slytherin",
        dateOfBirth: "05-06-1980",
        yearOfBirth: 1980,
        wizard: true,
        ancestry: "pure-blood",
        eyeColour: "grey",
        hairColour: "blonde",
        wand: { wood: "hawthorn", core: "unicorn tail-hair", length: 10 },
        patronus: "",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Tom Felton",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/draco.jpg",
      },
      {
        id: "ca3827f0-375a-4891-aaa5-f5e8a5bad225",
        name: "Minerva McGonagall",
        alternate_names: [],
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "04-10-1925",
        yearOfBirth: 1925,
        wizard: true,
        ancestry: "half-blood",
        eyeColour: "",
        hairColour: "black",
        wand: { wood: "fir", core: "dragon heartstring", length: 9.5 },
        patronus: "tabby cat",
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: "Dame Maggie Smith",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
      },
    ];
    if (data) {
      setCharacters(data);
    } else {
      setCharacters(dummyCharacters);
    }
  }, [data]);

  return (
    <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:m-auto lg:min-w-[800px] lg:grow">
      <div
        className="min-h-screen h-full w-full flex flex-col bg-fixed "
        style={{
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header setToggleSearch={setToggleSearch} toggleSearch={toggleSearch} />

        {isLoading ? <Loading /> : <Collection />}

        <section className={"mb-6 h-full w-full"}>
          <div className="mx-auto mb-4 flex items-end justify-around sm:mb-6">
            <div className="flex items-end">
              <h2 className="md:heading-lg text-xl font-light capitalize leading-none py-px sm:py-0 text-app-pure-white">
                Characters
              </h2>
              <p
                className={
                  "ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]"
                }
              >
                cast
              </p>
            </div>
          </div>
        </section>

        {isLoading ? <Loading /> : <CardList characters={getCharacters()} />}

        <Pagination
          currentPage={currentPage}
          isFirst={currentPage === 1}
          isLast={currentPage === totalPages}
          goToNextPage={handleNextPage}
          goToPreviousPage={handlePreviousPage}
          totalPages={totalPages}
        />

        <Footer />

        {toggleSearch && (
          <SearchModal
            setToggleSearch={setToggleSearch}
            filteredCharacters={filteredCharacters}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>
    </main>
  );
}