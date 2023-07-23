import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useGetCharachterInfoQuery } from "../../store/rickMorty/rickMorty.api";
import { useAuth } from "./../../hooks/useAuth";

export const DetailsPage = () => {
  const { isAuth } = useAuth();
  const { id } = useParams();

  //
  const {
    isError,
    isLoading,
    data: character,
  } = useGetCharachterInfoQuery(Number(id) || null);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  if (isLoading)
    return (
      <p className="flex-auto text-center pt-10 mx-auto mt-20">Loading ...</p>
    );
  if (!character || isError)
    return (
      <p className="flex-auto font-bold text-red-600 text-center pt-10 mx-auto mt-20">
        Characters not found
      </p>
    );

  return (
    <div className="flex-auto">
      <div className="flex flex-col items-center justify-around max-w-[500px] m-auto mt-10 border py-2 px-2 rounded text-center bg-white drop-shadow-md">
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
          {character.type && (
            <p className="text-sm">
              Character type:{" "}
              <span className="font-bold">{character.type}</span>
            </p>
          )}
          <p className="text-sm">
            created at: <span className="font-bold">{character.created}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
