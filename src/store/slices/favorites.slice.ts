import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IFavoritesState {
  favorites: number[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<number>) {
      const isFavorite = state.favorites.some(
        (elem) => elem === action.payload
      );

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (elem) => elem !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    deleteAll(state) {
      return initialState;
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
