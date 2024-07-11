import React, { useContext } from "react";
import InputSearch from "./InputSearch";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContextProvider";

const NavBar = () => {
  const { favourites } = useContext(GlobalContext);
  return (
    <header>
      <div className="flex items-center justify-between py-2 px-6 space-y-6 bg-blue-200">
        <Link to="/">
          <Logo />
        </Link>
        <InputSearch />
        <Link to="/favourites">
          <>
            <small className="p-1 bg-slate-500 text-white rounded-full mx-2">{favourites.length}</small>
            <span>Favourites</span>
          </>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
