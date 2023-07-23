import React, { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import {
  useSearchCharactersQuery,
  useLazyGetCharachterInfoQuery,
} from "../../store/rickMorty/rickMorty.api";
import { useDebounce } from "./../../hooks/debounce";
import { Navigate } from "react-router-dom";
import { useAuth } from "./../../hooks/useAuth";
import { useActions } from "./../../hooks/actions";

export default function SearchPage() {
  const { isAuth } = useAuth();
  const { addToHistory } = useActions();

  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const debounced = useDebounce(search);
  const {
    isError,
    isLoading,
    data: characters,
  } = useSearchCharactersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  useEffect(() => {
    setDropDown(debounced.length > 3 && characters?.length! > 0);
  }, [debounced, characters]);

  const [fetchCharacter, { data: character, isLoading: isCharacterLoading }] =
    useLazyGetCharachterInfoQuery();

  const clickHandler = (id: number) => {
    fetchCharacter(id);
    addToHistory(id);
    setSearch("");
  };

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex flex-auto justify-center pt-5 mx-auto mt-2">
      <div className="relative w-[560px]">
        {isError && (
          <div className="mb-2">
            <p className="text-center text-red-600">Character not found ...</p>
          </div>
        )}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 w-full h-[42px] mb-2"
          placeholder="Search for Rick and Morty character..."
        ></input>
        {dropDown && !isError && (
          <ul className="overflow-y-scroll list-none absolute top-[42px] right-0 left-0 max-h-[200px] shadow-md bg-white">
            {isLoading && (
              <p className="text-center text-green-500">Loading...</p>
            )}
            {characters?.map((char) => (
              <li
                key={char.id}
                onClick={() => clickHandler(char.id)}
                className="px-4 py-2 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {char.name}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center mt-4">
          {isCharacterLoading && <p className="text-center">Loading...</p>}
          {character && !dropDown && (
            <CharacterCard character={character} key={character.id} />
          )}
        </div>
      </div>
    </div>
  );
}
