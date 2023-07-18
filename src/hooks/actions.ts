import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/slices/favorites.slice";

const actions = { ...favoritesActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
