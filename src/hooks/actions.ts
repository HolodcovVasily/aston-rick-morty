import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../store/slices/favorites.slice";
import { historyActions } from "../store/slices/history.slice";
import { userActions } from "./../store/slices/user.slice";

const rootActions = { ...favoritesActions, ...userActions, ...historyActions };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
