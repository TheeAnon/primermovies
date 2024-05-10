import React from "react";
import avatar from "../images/avatar.png";
import Menu from "./menu";
import SearchBar from "./search";


const Header = () =>{

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-lg md:text-xl lg:text-4xl">
              Primermovies
            </a>
          </div>
        </div>

        <div className="navbar-end space-x-2">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <button className="btn btn-outline rounded-full btn-sm normal-case">Log in</button>
        </div>
      </div>

      <div className="px-5 md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};


export default Header;
