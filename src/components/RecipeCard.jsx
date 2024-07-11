import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex overflow-hidden flex-col max-w-sm rounded-lg border border-slate-300 shadow-sm ">
      <img className="h-36 object-cover" src={recipe.image_url} alt="" />
      <div className="flex flex-col gap-4 p-4 bg-white align-items-center">
        <h3 className="text-lg">{recipe.title}</h3>
        <p>{recipe.publisher}</p>
        <Link to={`/recipes/${recipe.id}`}>
          <button
            className="bg-blue-600 text-white rounded-md p-1 hover:bg-blue-500"
            type="button"
          >
            View recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
