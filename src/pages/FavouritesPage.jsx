import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";
import { Link } from "react-router-dom";

const FavouritesPage = () => {
  const { favourites, setFavourites } = useContext(GlobalContext);

  const handleOnClick = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      {favourites.map((recipe) => (
        <div className="flex gap-8 border border-slate-500 rounded-md p-2 max-w-xl mx-auto justify-between">
          <div className="flex gap-4">
            <img
              className="rounded-md object-cover size-28"
              src={recipe.image_url}
            />
            <div className="">
              <h2>Title: {recipe.title}</h2>
              <p>Publisher: {recipe.publisher}</p>
              <p>Servings: {recipe.servings}</p>
              <a href={recipe.source_url}>Source Url</a>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              onClick={() => handleOnClick(recipe.id)}
              type="button"
              className=" bg-slate-800 text-white rounded-md shadow-sm self-start p-1 px-4 hover:bg-slate-600 mt-8 align-middle"
            >
              Remove
            </button>
            <Link to={`/recipes/${recipe.id}`}>
              <button className=" bg-slate-800 text-white rounded-md shadow-sm self-start p-1 px-4 hover:bg-slate-600 mt-8 align-middle">
                view details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouritesPage;
