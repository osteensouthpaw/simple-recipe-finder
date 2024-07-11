import { useReducer, useState } from "react";
import NavBar from "./components/NavBar";
import RecipeGrid from "./components/RecipeGrid";
import searchReducer from "./reducers/searchReducer";
import InputContext from "./contexts/inputContext";

const App = () => {
  return (
    <InputContext.Provider value={{ searchText, dispatch }}>
      <NavBar />
      <RecipeGrid />
    </InputContext.Provider>
  );
};

export default App;
