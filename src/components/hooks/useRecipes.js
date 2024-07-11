import { useContext, useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import InputContext from "../../contexts/inputContext";

const useRecipes = () => {
  const { searchText } = useContext(InputContext);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/recipes", {
        signal: controller.signal,
        params: { search: searchText },
      })
      .then(({ data }) => {
        setLoading(false);
        console.log(data.data.recipes);
        setRecipes(data.data.recipes);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err);
      });

    return () => controller.abort();
  }, [searchText]);

  return { recipes, error, isLoading };
};

export default useRecipes;
