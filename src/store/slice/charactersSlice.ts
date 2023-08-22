import { Character } from "@/types/character";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface charactersState {
    characters: Character[];
    filteredCharacters: Character[];
    loading: boolean;
    error: string;
}

const initialState: charactersState = {
    characters: [],
    filteredCharacters: [],
    loading: false,
    error: "",
};

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
        },
        setFilteredCharacters: (state, action: PayloadAction<Character[]>) => {
            state.filteredCharacters = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        filterCharacters: (state, action: PayloadAction<string>) => {
            state.filteredCharacters = state.characters.filter(
              (character) =>
                character.name
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                character.house
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
            );
        },
    },
});


export const { setCharacters, setFilteredCharacters, setLoading, filterCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;