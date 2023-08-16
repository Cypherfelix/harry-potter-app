import axios from "axios";
const API_URL = "https://hp-api.onrender.com/";

export const fetchCharacters = async () => {
  const response = await axios.get(`${API_URL}/api/characters`);
  return response.data;
};

export const fetchCharacter = async (id: string) => {
    const response = await axios.get(`${API_URL}/api/characters/${id}`);
    return response.data;
}

export const fetchSpells = async () => {
    const response = await axios.get(`${API_URL}/api/spells`);
    return response.data;
}
    
export const fetchStudents = async () => {
    const response = await axios.get(`${API_URL}/api/characters/students`);
    return response.data;
}

export const fetchStaff = async () => {
    const response = await axios.get(`${API_URL}/api/characters/staff`);
    return response.data;
}