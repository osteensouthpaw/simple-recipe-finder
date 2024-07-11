import { createBrowserRouter } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "recipes/:id",
        element: <RecipePage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
    ],
  },
]);

export default router;
