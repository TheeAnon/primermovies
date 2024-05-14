import React from "react";
import avatar from "../images/avatar.png";

const Header = () =>{

  return (
      <div className="navbar">
            <a href="/" className="btn btn-ghost p-0 normal-case text-white text-lg md:text-xl lg:text-4xl navbar-start">
              Primermovies
            </a>

        <div className="navbar-end space-x-2">
          <a href="login" className="btn btn-outline md:btn-md lg:btn-lg rounded-full btn-sm normal-case border-white text-white">Log in</a>
        </div>
    </div>
  );
};


export default Header;
