import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";

const useRecipe = (id) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get(`/recipes/${id}`, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        console.log(res.data.data.recipe);
        setRecipe(res.data.data.recipe);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err);
      });

    return () => controller.abort();
  }, [id]);

  return { recipe, isLoading, error };
};

export default useRecipe;
