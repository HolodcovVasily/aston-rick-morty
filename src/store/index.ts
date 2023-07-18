import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { rickMortyApi } from "./rickMorty/rickMorty.api";
import { favoritesReducer } from "./slices/favorites.slice";

export const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickMortyApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
