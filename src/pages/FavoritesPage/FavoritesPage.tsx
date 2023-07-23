import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./../../hooks/useAuth";
import { useAppSelector } from "./../../hooks/redux";
import { useActions } from "./../../hooks/actions";
import { useGetMultipleCharachtersQuery } from "../../store/rickMorty/rickMorty.api";
import { CharactersList } from "./../../components/CharactersList/CharactersList";

export default function FavoritesPage() {
  const { favorites } = useAppSelector((state) => state.favorites);
  const {
    isError,
    isLoading,
    isSuccess,
    data: charachters,
  } = useGetMultipleCharachtersQuery(favorites);
  const { isAuth } = useAuth();
  const { deleteAll } = useActions();

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  if (isLoading)
    return <p className="text-center pt-10 mx-auto mt-20">Loading ...</p>;
  if (favorites.length === 0)
    return (
      <p className="flex-auto text-center mt-20 text-white">
        No favorites characters ...
      </p>
    );
  if (isError)
    return (
      <p className="text-center pt-10 mx-auto mt-20 text-red-600">
        something went wrong...
      </p>
    );

  return (
    <div className="flex-auto text-center">
      <button
        className="px-4 py-2 bg-red-500 mt-4 rounded text-white hover:bg-red-600 transition-all"
        onClick={() => deleteAll()}
      >
        Clear favorites list
      </button>
      {isSuccess && charachters.length > 0 && (
        <CharactersList characters={charachters} />
      )}
    </div>
  );
}
