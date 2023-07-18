import React from "react";
import { useAppSelector } from "./../../hooks/redux";

export function FavoritesPage() {
  const { favorites } = useAppSelector((state) => state.favorites);

  if (favorites.length === 0)
    return <p className="text-center mt-20 text-white">No characters ...</p>;

  return (
    <div className="flex-auto mt-20 text-center">
      <ul className="list-none text-white">
        {favorites.map((fav) => (
          <li key={fav}>
            <a href={fav} target="_blank" rel="noreferrer">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
