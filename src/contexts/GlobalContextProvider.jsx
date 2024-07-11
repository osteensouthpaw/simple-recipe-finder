import React, { useState } from "react";
export const GlobalContext = React.createContext({});

const GlobalContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  return (
    <GlobalContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
