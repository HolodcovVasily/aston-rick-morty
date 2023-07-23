import { createSlice } from "@reduxjs/toolkit";

// interface IUserState {
//   user: { email: string | null; password: string | null };
// }

// const initialState: IUserState = {
//   user: {
//     email: null,
//     password: null,
//   },
// };

interface IUserState {
  user: {
    email: string | null;
    token: string | null;
    id: number | null;
  };
}

const initialState: IUserState = {
  user: {
    email: null,
    token: null,
    id: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, token, id } = action.payload;
      state.user.email = email;
      state.user.token = token;
      state.user.id = id;

      ////TO MIDDLEWARE LOGIC:
      // auth => save data to CURRENT USER and STORE in LS
      // reload => use LS, write some preloaded state
      const savedStoreFromLS = localStorage.getItem("store");
      const serializedSavedStore = savedStoreFromLS
        ? JSON.parse(savedStoreFromLS)
        : {};

      const user = {
        user: action.payload,
      };

      localStorage.setItem("currentUser", JSON.stringify(user));
      serializedSavedStore[action.payload.email] = user;
      localStorage.setItem("store", JSON.stringify(serializedSavedStore));
    },
    logout() {
      ////TO MIDDLEWARE LOGIC
      localStorage.removeItem("currentUser");
      localStorage.removeItem("history");
      localStorage.removeItem("favorites");
      ////TO MIDDLEWARE LOGIC

      return initialState;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
