import { House } from "@/types/character";

export default function CardTheme(house: House) {
  let cardTheme, hoverTextColor, borderColor, hoverBorderColor, color;
  switch (house) {
    case "Gryffindor":
      cardTheme = "bg-red-500";
      hoverTextColor = "hover:text-brown-700";
      borderColor = "border-red-800";
      hoverBorderColor = "hover:border-red-900";
      color = "text-red-800";
      break;
    case "Slytherin":
      cardTheme = "bg-green-500";
      hoverTextColor = "text-green-500";
      borderColor = "border-green-500";
      hoverBorderColor = "hover:border-green-500";
      break;
    case "Ravenclaw":
      cardTheme = "bg-blue-500";
      hoverTextColor = "text-blue-500";
      borderColor = "border-blue-500";
      hoverBorderColor = "hover:border-blue-500";
      break;
    case "Hufflepuff":
      cardTheme = "bg-yellow-500";
      hoverTextColor = "text-yellow-500";
      borderColor = "border-yellow-500";
      hoverBorderColor = "hover:border-yellow-500";
      break;
    default:
      cardTheme = "bg-gray-500";
      hoverTextColor = "text-gray-500";
      borderColor = "border-gray-500";
      hoverBorderColor = "hover:border-gray-500";
      break;
  }
  return { cardTheme, hoverTextColor, borderColor, hoverBorderColor, color };
}
