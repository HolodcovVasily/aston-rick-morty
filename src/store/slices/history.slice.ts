import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HistoryInitialStateType = {
  search: number[];
};

const initialState: HistoryInitialStateType = {
  search: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<number>) {
      state.search.push(action.payload);

      // remove to middleware logic
      localStorage.setItem("history", JSON.stringify(state.search));
      //
    },
    deleteFromHistory(state) {
      // remove to middleware logic
      localStorage.removeItem("history");
      //

      return initialState;
    },
  },
});

export const historyActions = historySlice.actions;
export const historyReducer = historySlice.reducer;
