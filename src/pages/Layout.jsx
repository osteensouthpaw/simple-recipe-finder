import React, { useReducer } from "react";
import NavBar from "../components/NavBar";
import InputContext from "../contexts/inputContext";
import searchReducer from "../reducers/searchReducer";
import RecipeGrid from "../components/RecipeGrid";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [searchText, dispatch] = useReducer(searchReducer, "");

  return (
    <InputContext.Provider value={{ searchText, dispatch }}>
      <NavBar />
      <Outlet />
    </InputContext.Provider>
  );
};

export default Layout;
