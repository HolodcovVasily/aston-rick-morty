import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const KEY_FAVORITES = "favoritesChar";

interface IFavoritesState {
  favorites: string[];
}

const initialState: IFavoritesState = {
  favorites: JSON.parse(localStorage.getItem(KEY_FAVORITES) ?? "[]"),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem(KEY_FAVORITES, JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (elem) => elem !== action.payload
      );
      localStorage.setItem(KEY_FAVORITES, JSON.stringify(state.favorites));
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
