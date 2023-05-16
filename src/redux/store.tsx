import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";

const store = configureStore({
    reducer: {
        genres: genreReducer,
    }
});

export { store };
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch