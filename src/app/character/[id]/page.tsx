"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Character } from "@/types/character";
import { Metadata } from "next";

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
  image: "/images/no-profile-male.jpg", //https://ik.imagekit.io/hpapi/harry.jpg
};

export default function Home({}) {
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
      Hello World
      <Footer />
    </div>
  );
}

export { metadata };
