import { createSlice } from "@reduxjs/toolkit";

interface GenreState {
    genres: Genre[];
}

const initialState: GenreState = {
    genres: [],
};
  

export const slice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        setGenres(state, { payload }) {
            return { ...state, genres: payload }
        },
    }
});

export const  { setGenres } = slice.actions;
export const selectGenres = (state: { genres: Genre[] }) => state.genres;
export default slice.reducer;