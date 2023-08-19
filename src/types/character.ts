// To parse this data:
//
//   import { Convert } from "./file";
//
//   const Character = Convert.toCharacter(json);

export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: Species;
  gender: Gender;
  house: House;
  dateOfBirth: null | string;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: Ancestry;
  eyeColour: EyeColour;
  hairColour: HairColour;
  wand: Wand;
  patronus: Patronus;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export type Ancestry =
  | "half-blood"
  | "muggleborn"
  | "pure-blood"
  | ""
  | "squib"
  | "muggle"
  | "half-veela"
  | "quarter-veela";

export type EyeColour =
  | "green"
  | "brown"
  | "blue"
  | "grey"
  | ""
  | "black"
  | "red"
  | "yellow"
  | "hazel"
  | "pale, silvery"
  | "amber"
  | "orange"
  | "white"
  | "dark"
  | "yellowish";

export type Gender = "male" | "female";

export type HairColour =
  | "black"
  | "brown"
  | "red"
  | "blonde"
  | "bald"
  | "grey"
  | ""
  | "blond"
  | "silver"
  | "sandy"
  | "white"
  | "ginger"
  | "dark"
  | "tawny"
  | "dull";

export type House =
  | "Gryffindor"
  | "Slytherin"
  | "Hufflepuff"
  | "Ravenclaw"
  | "unknown-house"
  | "";

export type Patronus =
  | "stag"
  | "otter"
  | "Jack Russell terrier"
  | ""
  | "tabby cat"
  | "swan"
  | "doe"
  | "Non-Corporeal"
  | "hare"
  | "horse"
  | "wolf"
  | "weasel"
  | "lynx"
  | "persian cat"
  | "boar"
  | "goat";

export type Species =
  | "human"
  | "half-giant"
  | "werewolf"
  | "cat"
  | "goblin"
  | "owl"
  | "ghost"
  | "poltergeist"
  | "three-headed dog"
  | "dragon"
  | "centaur"
  | "house-elf"
  | "acromantula"
  | "hippogriff"
  | "giant"
  | "vampire"
  | "half-human";

export interface Wand {
  wood: Wood;
  core: Core;
  length: number | null;
}

export type Core =
  | "phoenix feather"
  | "dragon heartstring"
  | "unicorn tail-hair"
  | "unicorn hair"
  | "";

export type Wood =
  | "holly"
  | "vine"
  | "willow"
  | "hawthorn"
  | "fir"
  | "ash"
  | ""
  | "oak"
  | "cherry"
  | "yew"
  | "cypress"
  | "walnut"
  | "cedar"
  | "birch"
  | "elm"
  | "mahogany"
  | "larch"
  | "chestnut"
  | "hornbeam";

export class Convert {
  public static toCharacter(json: string): Character[] {
    const result: Character[] = JSON.parse(json);
    result.map((character) => {
      character.image === ""
        ? character.gender === "male"
          ? (character.image = "/images/no-profile-male.jpg")
          : (character.image = "/images/no-profile-female.jpg")
        : (character.image = character.image);
      character.house === ""
        ? (character.house = "unknown-house")
        : (character.house = character.house);
    });
    return result;
  }

  public static CharacterToJson(value: Character[]): string {
    return JSON.stringify(value);
  }
}
