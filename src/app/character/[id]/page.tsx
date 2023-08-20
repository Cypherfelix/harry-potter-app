"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Character } from "@/types/character";
import CardTheme from "@/utils/cardTheme";
import { Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
  title: "Harry Potter",
  description: "A Harry Potter cast page built with Next.js and Tailwind CSS.",
};

const character: Character = {
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

export default function Home({}) {
  let { borderColor, hoverBorderColor, hoverTextColor, cardTheme } = CardTheme(
    character.house
  );

  console.log(CardTheme(character.house));

  metadata.title = "Harry";
  return (
    <div
      className="livingImage"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-0 lg:my-0">
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-slate-400 opacity-75 my-12 mx-6 lg:mx-0 relative">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div
              className={`border-t-2 border-b-2 ${borderColor} w-full absolute bottom-0`}
            ></div>
            <div
              className={`border-l-2 border-r-2 ${borderColor} h-full absolute left-0`}
            ></div>
          </div>

          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className={`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center ${borderColor} ${hoverBorderColor}`}
              style={{
                backgroundImage: `url(
                  ${
                    character.image === ""
                      ? character.gender === "female"
                        ? "no-profile-female.jpg"
                        : "no-profile-male.jpg"
                      : character.image
                  }
                )`,
              }}
            ></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              {character.name}
            </h1>
            <div
              className={`mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 ${borderColor} opacity-25`}
            ></div>

            <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <div className="w-auto h-auto my-auto mr-4">
                <Image
                  title={character.house}
                  alt={character.house}
                  className="h-12 w-12"
                  src={`/images/${character.house}.png`}
                  width={48}
                  height={48}
                />
              </div>
              {character.house || "Unknown"}
            </div>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              {character.alternate_names.join(", ") || "Unknown"}
            </p>
            <p className="pt-8 text-sm">
              {character.name} is a {character.species}{" "}
            </p>

            <div className={`pt-12 pb-8 ${hoverTextColor}`}>
              <button
                className={`${cardTheme} text-white font-bold py-2 px-4 rounded-full ${hoverBorderColor}`}
              >
                HOME
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Image
            src={
              character.image === ""
                ? character.gender === "female"
                  ? "no-profile-female.jpg"
                  : "no-profile-male.jpg"
                : character.image
            }
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block h-[500px]"
            alt="profile"
            height={500}
            width={358}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { metadata };
