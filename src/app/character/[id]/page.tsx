"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Character } from "@/types/character";
import CardTheme from "@/utils/cardTheme";
import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";
import SearchModal from "@/components/searchModal";
import { fetchCharacters } from "@/utils/api";
import CorrectIcon from "@/components/icons/correct";
import FalseIcon from "@/components/icons/falseIcon";
import ImageCard from "@/components/character/imageCard";

const characterDummy: Character = {
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
};

interface Props {
  params: { id: string };
  searchParams: URLSearchParams;
}
export default function Home(props: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [character, setCharacter] = useState<Character>(characterDummy);
  const [theme, setTheme] = useState({
    borderColor: "border-gray-400",
    hoverBorderColor: "hover:border-gray-500",
    hoverTextColor: "hover:text-gray-500",
    cardTheme: "bg-gray-400",
  });

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

  useEffect(() => {
    const id = props.params.id;
    const character = characters.find((character) => character.id === id);
    if (character) {
      setCharacter(character);
      let theme = CardTheme(character.house);
      setTheme(theme);
    }
  }, [props.params.id, characters]);

  useEffect(() => {
    try {
      fetchCharacters().then((r) => {
        console.log(Array.from(r).slice(0, 10));
        setCharacters(r);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="lg:flex min-h-screen w-full h-full bg-transparent">
      <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow text-app-pure-white">
        <Header
          scrollToggle={false}
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />
        <section className="flex flex-col mt-4 sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
          <ImageCard src={character.image} title={character.name} />
          <section className="md:w-3/5">
            <div className="mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left">
              <h1 className="mb-1 text-3xl font-light md:mb-3 md:text-5xl">
                {character.name}
              </h1>
              <h2 className="text-xs font-light text-app-placeholder sm:text-sm md:text-lg italic">
                by <span className="font-medium">{character.actor}</span>
              </h2>
            </div>
            <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
              <p className="mb-2 text-xl font-medium md:mr-4 md:mb-0">Alive</p>
              <span
                className="align-center flex self-center"
                style={{ display: "inline-block", direction: "ltr" }}
              >
                {character.alive ? <CorrectIcon /> : <FalseIcon />}
              </span>
            </div>
            <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg">
              <div>
                <p className="mb-1 text-app-placeholder underline">Gender</p>
                <p className="text-app-pure-white capitalize">
                  {character.gender}
                </p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder underline">D.O.B</p>
                <p className="text-app-pure-white">
                  {character.dateOfBirth != null
                    ? character.dateOfBirth
                    : "Unknown"}
                </p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder underline">Year</p>
                <p className="text-app-pure-white">{character.yearOfBirth}</p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder underline">Species</p>
                <p className="text-app-pure-white capitalize">
                  {character.species}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-1 md:text-lg">House</h3>
              <div className="w-auto h-auto my-auto flex items-center space-x-3">
                <Image
                  title={character.house}
                  alt={character.house}
                  className="h-12 w-12"
                  src={`/images/${character.house}.png`}
                  width={20}
                  height={20}
                />
                <p className="font-light capitalize">{character.house}</p>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="mb-2 md:text-lg">Wand</h3>
              <ul className="flex flex-wrap text-xs font-light md:text-sm">
                <li className="mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue">
                  <h3 className="mb-1 text-app-placeholder capitalize">
                    Wood:{" "}
                    <span className="italic text-sm">
                      {character.wand.wood}
                    </span>
                  </h3>
                </li>
                <li className="mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue">
                  <h3 className="mb-1 text-app-placeholder capitalize">
                    Core:{" "}
                    <span className="italic text-sm">
                      {character.wand.core}
                    </span>
                  </h3>
                </li>
                <li className="mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue">
                  <h2 className="mb-1 text-app-placeholder capitalize">
                    Length:{" "}
                    <span className="italic text-sm">
                      {character.wand.length}
                    </span>
                  </h2>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="mb-1 md:text-lg">Alternate Names</h3>
              <p className="font-light">
                {character.alternate_names.join(", ")}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 md:text-lg">Alternate Actors</h3>
              <ul className="flex flex-wrap text-xs md:text-sm">
                {character.alternate_actors.length === 0 ? (
                  <p className="font-light italic">No alternate actors</p>
                ) : (
                  character.alternate_actors.map((actor, index) => (
                    <li
                      key={index}
                      className="mr-2 mb-2 flex items-center justify-center rounded-md border-[1px] py-px px-2 text-app-pure-white"
                    >
                      {actor}
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="mb-10 flex flex-wrap">
              <div className="mb-4 mr-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue">
                <p>Student</p>
                {character.hogwartsStudent ? <CorrectIcon /> : <FalseIcon />}
              </div>
              <div className="mb-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue">
                <p>Staff</p>
                {character.hogwartsStaff ? <CorrectIcon /> : <FalseIcon />}
              </div>
            </div>
          </section>
        </section>
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
      </main>
    </div>
  );
}

