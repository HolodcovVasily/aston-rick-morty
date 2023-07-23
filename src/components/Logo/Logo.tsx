import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/rmlogo.png";

export function Logo() {
  return (
    <div className="flex justify-start items-center gap-5">
      <Link to="/">
        <div className="w-[100px]">
          <img src={logo} alt="RickMorty" />
        </div>
      </Link>
      <Link to="/">
        <h3 className="font-bold text-2xl">Rick and Morty App</h3>
      </Link>
    </div>
  );
}
