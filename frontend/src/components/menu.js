import React, { Fragment } from "react";
import { FaTape, FaClipboard, FaFilm, FaInfoCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";

function Menu() {
  return (
    <ul className="menu w-auto p-0 rounded-box flex-shrink-0 font-medium text-white text-xl">
      <li>
        <a href="/"><GoHome />Home</a>
      </li>
      <li>
        <a href="/series" className="whitespace-nowrap"><FaTape />TV Series</a>
      </li>
      <li>
        <a href="/movies"><FaClipboard />Movies</a>
      </li>
      <li>
        <a href="/anime"><FaFilm />Anime</a>
      </li>
      <li>
        <a href="/about" className="whitespace-nowrap"><FaInfoCircle />About</a>
      </li>
    </ul>
  );
}

export default Menu;
