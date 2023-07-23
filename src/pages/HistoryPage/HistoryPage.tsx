import React from "react";
import { Navigate } from "react-router-dom";
import { CharactersList } from "../../components/CharactersList/CharactersList";
import { useAuth } from "./../../hooks/useAuth";
import { useActions } from "./../../hooks/actions";
import { useGetMultipleCharachtersQuery } from "../../store/rickMorty/rickMorty.api";
import { useAppSelector } from "./../../hooks/redux";

export default function HistoryPage() {
  const { search } = useAppSelector((state) => state.history);
  const {
    isError,
    isLoading,
    isSuccess,
    data: charachters,
  } = useGetMultipleCharachtersQuery(search);

  const { isAuth } = useAuth();
  const { deleteFromHistory } = useActions();

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  if (isLoading)
    return <p className="text-center pt-10 mx-auto mt-20">Loading ...</p>;
  if (search.length === 0)
    return (
      <p className="flex-auto text-center mt-20 text-white">
        No items in history...
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
      {isSuccess && search.length > 0 && (
        <>
          <button
            className="px-4 py-2 bg-red-500 mt-4 rounded text-white hover:bg-red-600 transition-all"
            onClick={() => deleteFromHistory()}
          >
            Clear search list
          </button>
          <CharactersList characters={charachters} />
        </>
      )}
    </div>
  );
}
