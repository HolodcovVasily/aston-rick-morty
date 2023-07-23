import React from "react";
import { ICharacter } from "./../../models/models";
import { CharacterCard } from "./../CharacterCard/CharacterCard";

export function CharactersList({ characters }: { characters: ICharacter[] }) {
  return (
    <div className="mx-auto max-w-full pt-5 px-5 mb-10">
      <div className="flex justify-around flex-row flex-wrap gap-2.5">
        {characters.map((character: ICharacter, i: number) => (
          <CharacterCard character={character} key={i} />
        ))}
      </div>
    </div>
  );
}
