import React from "react";

export default function Footer() {
  return (
    <div className="shadow-md bg-[#262561] text-white text-xs fixed left-0 right-0 bottom-0 px-4 py-2">
      <a
        href="https://rickandmortyapi.com/api"
        target="_blank"
        rel="noreferrer"
      >
        rickandmortyapi.com/api
      </a>
      <span className="pl-2">was used to create this project</span>
    </div>
  );
}
