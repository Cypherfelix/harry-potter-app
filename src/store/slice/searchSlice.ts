import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  value: string;
  searchToggle: boolean;
}

const initialState: SearchState = {
  value: "",
  searchToggle: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setSearchToggle: (state, action: PayloadAction<boolean>) => {
      state.searchToggle = action.payload;
      console.log("In set search", action.payload);
    },
  },
});

export const { setSearchValue, setSearchToggle } = searchSlice.actions;

export default searchSlice.reducer;
