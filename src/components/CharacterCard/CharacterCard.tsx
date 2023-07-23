import React, { FC, useState } from "react";
import { ICharacter } from "./../../models/models";
import { useActions } from "./../../hooks/actions";
import { useAppSelector } from "./../../hooks/redux";
import { Link } from "react-router-dom";

interface ICharacterCardProps {
  character: ICharacter;
}

export const CharacterCard: FC<ICharacterCardProps> = ({ character }) => {
  const { toggleFavorites } = useActions();
  const { favorites } = useAppSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(character.id)
  );

  const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleFavorites(character.id);
    setIsFavorite(true);
  };

  const removeFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleFavorites(character.id);
    setIsFavorite(false);
  };

  return (
    <Link to={`/character/${character.id}`}>
      <div className="flex flex-col items-center justify-around w-[300px] border py-2 px-2 rounded text-center bg-white drop-shadow-md">
        <h2 className="mb-2">
          Character name: <span className="font-bold">{character.name}</span>
        </h2>
        <img
          src={character.image}
          alt="character?.name"
          className="w-[160px] h-[160px] border-4 border-[#F1DC30] rounded-full shadow-md"
        />
        <div className="mt-2">
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
              className="py-2 px-4 bg-green-400 rounded hover:shadow-md hover:bg-green-600 transition-all mt-2"
            >
              Add
            </button>
          )}
          {isFavorite && (
            <button
              onClick={removeFav}
              className="py-2 px-4 bg-red-400 rounded hover:shadow-md hover:bg-red-600 transition-all mt-2"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};
