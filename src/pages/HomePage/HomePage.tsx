import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { CharactersList } from "../../components/CharactersList/CharactersList";
import { useGetCharactersQuery } from "../../store/rickMorty/rickMorty.api";
import { useAuth } from "./../../hooks/useAuth";

export function HomePage() {
  const { isAuth } = useAuth();

  const [page, setPage] = useState(1);
  const { isLoading, isError, isSuccess, data, isFetching } =
    useGetCharactersQuery(page);
  const charachters = data?.results ?? [];

  // ///// fix pagination! why? i dont know
  useEffect(() => {
    const onScrollHandler = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom && !isFetching) {
        if (scrolledToBottom) {
          setPage((prev) => prev + 1);
        }
      }
    };

    document.addEventListener("scroll", onScrollHandler);

    return function () {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, [page, isFetching]);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  if (isLoading)
    return <p className="text-center pt-10 mx-auto mt-20">Loading ...</p>;
  if (isError)
    return (
      <p className="text-center pt-10 mx-auto mt-20 text-red-600">
        something went wrong...
      </p>
    );

  return (
    <>
      <div className="p-10 text-white">
        <h1 className="font-bold mb-5">Some information about project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          error aspernatur eveniet ipsa vitae nobis quas, hic totam, impedit,
          quo voluptates. Quos id officia incidunt fuga, omnis adipisci dicta
          nostrum ab esse ad aliquam quidem voluptate autem iste explicabo natus
          consequuntur quaerat tempora quod? Ipsa dolore perferendis neque
          quisquam laboriosam?
        </p>
      </div>
      {isSuccess && isAuth && <CharactersList characters={charachters} />}
    </>
  );
}
