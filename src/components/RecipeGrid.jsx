import React from "react";
import RecipeCard from "./RecipeCard";
import useRecipes from "./hooks/useRecipes";

const RecipeGrid = () => {
  const { recipes, error, isLoading } = useRecipes();

  if (error) throw error;
  if (isLoading) return <p>...Loading</p>;

  return recipes && recipes.length > 0 ? (
    <div className="grid grid-cols-3 gap-8 p-8 max-w-4xl mx-auto bg-slate-200">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  ) : (
    <div className="text-center mt-40 text-3xl font-bold text-slate-700">
      Search a recipe to get started...
    </div>
  );
};

export default RecipeGrid;
