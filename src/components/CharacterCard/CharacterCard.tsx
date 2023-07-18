import React, { useState } from "react";
import { ICharacter } from "./../../models/models";
import { useActions } from "./../../hooks/actions";
import { useAppSelector } from "./../../hooks/redux";

export function CharacterCard({ character }: { character: ICharacter }) {
  const { addToFavorites, removeFromFavorites } = useActions();
  const { favorites } = useAppSelector((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(character.url)
  );

  const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToFavorites(character.url);
    setIsFavorite(true);
  };

  const removeFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromFavorites(character.url);
    setIsFavorite(false);
  };

  return (
    <div className="flex flex-col items-center justify-around w-[300px] border py-2 px-4 rounded mb-2 text-center bg-white drop-shadow-md">
      <h2 className="mb-5">
        Character name: <span className="font-bold">{character.name}</span>
      </h2>
      <img
        src={character.image}
        alt="character?.name"
        className="w-[200px] h-[200px] border-4 border-[#F1DC30] rounded-full shadow-md"
      />
      <div className="mt-5">
        <p className="text-sm">
          Character gender:{" "}
          <span className="font-bold">{character.gender}</span>
        </p>

        <p className="text-sm">
          Character status:{" "}
          <span className="font-bold">{character.status}</span>
        </p>
        <p className="text-sm">
          Character type: <span className="font-bold">{character.type}</span>
        </p>

        {!isFavorite && (
          <button
            onClick={addToFav}
            className="py-2 px-4 bg-green-400 rounded hover:shadow-md transition-all mt-5"
          >
            Add
          </button>
        )}
        {isFavorite && (
          <button
            onClick={removeFav}
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all mt-5"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
