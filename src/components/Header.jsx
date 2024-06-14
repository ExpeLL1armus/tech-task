import React from "react";
import { NavLink } from "react-router-dom";

import mainMenu from "../assets/mainPage/ic_menu_24px.png";
import vertMenu from "../assets/mainPage/ic_more_vert_24px.png";

import "../css/header.css";

const Header = () => {
  return (
    <header className="flex-col pt-4">
      <div className="flex justify-around">
        <a href="/#">
          <img src={mainMenu} alt="menu" />
        </a>
        <h1 className="text-white">Tamil Nadu, Chennai</h1>
        <a href="/#">
          <img src={vertMenu} alt="vertMenu" />
        </a>
      </div>
      <nav className="mt-5">
        <ul className="flex justify-around">
          <li className="text-[#868794]">
            <NavLink to="/today">Today</NavLink>
          </li>
          <li className="text-[#868794]">
            <NavLink to="/forecast">Forecast</NavLink>
          </li>
          <li className="text-[#868794]">
            <NavLink to="/precipitation">Precipitation</NavLink>
          </li>
        </ul>
      </nav>
      <hr className="border-[#868794] mt-3.5" />
    </header>
  );
};

export default Header;
