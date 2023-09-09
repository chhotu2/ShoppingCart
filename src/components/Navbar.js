import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">

          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsource%2BCode&psig=AOvVaw00Wpabh34H21o-sFmMiBB9&ust=1692333160050000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIi4gLnu4oADFQAAAAAdAAAAABAE" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <div>
            <NavLink to="/">
              <p>HOME</p>
            </NavLink>
          </div>

          <div>
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
