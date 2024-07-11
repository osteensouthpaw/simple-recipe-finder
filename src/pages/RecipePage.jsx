import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useRecipe from "../components/hooks/useRecipe";
import { GlobalContext } from "../contexts/GlobalContextProvider";

const RecipePage = () => {
  const { id } = useParams();
  const { recipe, isLoading, error } = useRecipe(id);
  const { favourites, setFavourites } = useContext(GlobalContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) throw error;

  const handleOnClick = (recipe) => {
    const isCurrentlyPresent = favourites.find((item) => item.id === recipe.id);
    setFavourites(
      isCurrentlyPresent
        ? favourites.filter((item) => item.id !== recipe.id)
        : [...favourites, recipe]
    );
    console.log(favourites);
  };

  return (
    <>
      <div className="flex gap-4 my-3 justify-center">
        <img
          className="object-cover rounded-md"
          src={recipe.image_url}
          alt=""
        />
        <div className="p-2">
          <h2>Title: {recipe.title}</h2>
          <p>Publisher: {recipe.publisher}</p>
          <p>Servings: {recipe.servings}</p>
          <a href={recipe.source_url}>Source Url</a>
          <div>
            <h2 className="text-lg font-bold underline">Ingredients</h2>
            <div>
              {recipe &&
                recipe.ingredients &&
                recipe.ingredients.length > 0 &&
                recipe.ingredients.map((ingredient, index) => (
                  <div className="flex gap-2" key={index}>
                    <p>Step {index + 1}:</p>
                    <p>description: {ingredient.description}</p>
                    <p>quantity: {ingredient.quantity}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleOnClick(recipe)}
        className="bg-slate-800 text-white rounded-md shadow-sm p-1 px-4 hover:bg-slate-600 block mx-auto mt-8"
      >
        {favourites.find((item) => item.id === recipe.id)
          ? "Remove From Favourites"
          : "Add to Favourites "}
      </button>
    </>
  );
};

export default RecipePage;
