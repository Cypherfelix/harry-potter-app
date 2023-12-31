import { Character } from "@/types/character";
import { shimmer, toBase64 } from "@/utils/tools";
import Image from "next/image";
import Link from "next/link";

const CardList: React.FC<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className="mx-auto max-w-7xl gap-10 md:gap-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10 px-5">
      {characters.map((character, index) => (
        <MagicalCard key={index} character={character} />
      ))}
    </div>
  );
};

const MagicalCard: React.FC<{ character: any }> = ({ character }) => {
  let cardTheme, hoverTextColor, borderColor, hoverBorderColor;

  switch (character.house) {
    case "Gryffindor":
      cardTheme = "bg-red-500";
      hoverTextColor = "hover:text-brown-700";
      borderColor = "border-red-800";
      hoverBorderColor = "hover:border-red-900";
      break;
    case "Hufflepuff":
      cardTheme = "bg-yellow-400";
      hoverTextColor = "hover:text-gray-800";
      borderColor = "border-gray-300";
      hoverBorderColor = "hover:border-black";
      break;
    case "Ravenclaw":
      cardTheme = "bg-blue-500";
      hoverTextColor = "hover:text-brown-300";
      borderColor = "border-blue-700";
      hoverBorderColor = "hover:border-gray-300";
      break;
    case "Slytherin":
      cardTheme = "bg-green-600";
      hoverTextColor = "hover:text-gray-200";
      borderColor = "border-green-700";
      hoverBorderColor = "hover:border-green-800";
      break;
    default:
      cardTheme = "bg-gray-200";
      hoverTextColor = "hover:text-gray-800";
      borderColor = "border-gray-300";
      hoverBorderColor = "hover:border-gray-500";
      break;
  }

  return (
    <Link
      href={`/character/${character.id}`}
      aria-label={character.name}
      className={`card-hover-animation !z-5 relative rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px]  bg-cover justify-self-stretch flex flex-col justify-end h-96 sm:w-72 transform transition-all ease-in-out hover:scale-105 duration-300 cursor-pointer overflow-hidden`}
      style={{}}
    >
      <div className="absolute inset-0 z-0">
        <Image
          className="rounded-lg object-cover"
          src={character.image}
          alt={character.name}
          fill={true}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(384, 288)
          )}`}
          unoptimized
        />
      </div>

      <div className="relative z-20 w-full flex bg-black bg-opacity-40 backdrop-blur-md p-4 justify-between items-center">
        <div className="flex flex-col space-y-1">
          <h6
            className={`text-lg font-bold text-white capitalize truncate transition-colors duration-300 ${hoverTextColor} font-["emoji"] max-w-[140px] text-ellipsis`}
          >
            {character.name}
          </h6>
          <p className="text-lg text-gray-300 font-medium text-clip">
            {character.dateOfBirth || "Unknown"}
          </p>
        </div>

        <div className="w-auto h-auto my-auto">
          <Image
            title={character.house}
            alt={character.house}
            className="h-12 w-12"
            src={`/images/${character.house}.png`}
            width={48}
            height={48}
          />
        </div>
      </div>
    </Link>
  );
};


export default CardList;
