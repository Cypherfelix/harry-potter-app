import { Character, Convert } from "@/types/character";
import axios, { AxiosError } from "axios";
const API_URL = "https://hp-api.onrender.com/";

export { API_URL };

export const fetchCharacters = async (args: string) => {
  console.log("fetchCharacters args:", args);
  try {
    const response = await fetch(`${API_URL}api/characters`, {
      cache: "force-cache",
    });

    return Convert.toCharacter(JSON.stringify(await response.json()));
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Error fetching characters:", new Error(error).message);
    }
    return [];
  }
};

export const fetchCharacter = async (url: string) => {
  try {
    console.log("fetchCharacter url:", url);
    const response = await fetch(url, {
      cache: "force-cache",
    });
    let char: Character[] = await response.json();
    char = Convert.toCharacter(JSON.stringify(char));
    return char[0];
    // return Convert.toCharacter(JSON.stringify(response.json()));
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Error fetching character:", error);
    }
    return null;
  }
};

export const fetchSpells = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/spells`);
    return response.data;
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Error fetching spells:", error);
    }
    return [];
  }
};

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/characters/students`);
    return response.data;
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Error fetching students:", error);
    }
    return [];
  }
};

export const fetchStaff = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/characters/staff`);
    return response.data;
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Error fetching staff:", error);
    }
    return [];
  }
};

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Axios config error:", error.message);
  }
}
