import React from "react";
import avatar from "../images/avatar.png";
import {FaSearch} from 'react-icons/fa';

const Header = ({user}) =>{

  return (
      <div className="navbar">
            <a href="/" className="btn btn-ghost p-0 normal-case text-white text-lg md:text-xl lg:text-4xl navbar-start">
              Primermovies
            </a>

        <div className="navbar-end space-x-2">
          <button className="btn p-2 bg-black border-none w-12 text-gray-200 hover:text-[#A47C7A]"><FaSearch size={20} /></button>
          {!user&&<a href="login" className="btn btn-outline md:btn-md lg:btn-lg rounded-full btn-sm normal-case border-white text-white">Log in</a>}
        </div>
    </div>
  );
};


export default Header;
