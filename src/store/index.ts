import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { rickMortyApi } from "./rickMorty/rickMorty.api";
import { historyReducer } from "./slices/history.slice";
import { favoritesReducer } from "./slices/favorites.slice";
import { userReducer } from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
    user: userReducer,
    history: historyReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickMortyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
