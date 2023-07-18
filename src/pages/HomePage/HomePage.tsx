import React, { useEffect, useState } from "react";
import { CharactersList } from "../../components/CharactersList/CharactersList";
import { useGetCharactersQuery } from "../../store/rickMorty/rickMorty.api";

export function HomePage() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, isSuccess, data, isFetching } =
    useGetCharactersQuery(page);
  const charachters = data?.results ?? [];

  useEffect(() => {
    const onScrollHandler = (e: any) => {
      const scrollY = window.scrollY;
      const offsetHeight = document.body.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrolledToBottom = innerHeight + scrollY >= offsetHeight;
      const totalCount = data?.info.count ?? null;
      const charactersLength = charachters.length;
      if (scrolledToBottom && !isFetching && charactersLength < totalCount!) {
        console.log("fetching more data...");
        setPage((prev) => prev + 1);

        console.log(charachters.length);
      }
    };

    document.addEventListener("scroll", onScrollHandler);

    return function () {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, [page, isFetching]);

  if (isLoading)
    return <p className="text-center pt-10 mx-auto mt-20">Loading ...</p>;
  if (isError)
    return (
      <p className="text-center pt-10 mx-auto mt-20 text-red-600">
        something went wrong...
      </p>
    );
  return (
    <div className="flex justify-center pt-10 mx-auto mt-20">
      {isSuccess && <CharactersList characters={charachters} />}
    </div>
  );
}
