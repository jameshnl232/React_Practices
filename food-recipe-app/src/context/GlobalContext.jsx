import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [foundRecipes, setFoundRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    localStorage.getItem("favoriteRecipes")
      ? JSON.parse(localStorage.getItem("favoriteRecipes"))
      : []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setIsSubmitted(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        setFoundRecipes(data.data.recipes);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = (recipe) => {
    const found = favoriteRecipes.find((item) => item.id === recipe.id);
    let newFavoriteRecipes = [];
    if (!found) {
      newFavoriteRecipes = [...favoriteRecipes, recipe];
      setFavoriteRecipes(newFavoriteRecipes);
    } else {
      newFavoriteRecipes = favoriteRecipes.filter(
        (item) => item.id !== recipe.id
      );
      setFavoriteRecipes(newFavoriteRecipes);
    }
    localStorage.setItem("favoriteRecipes", JSON.stringify(newFavoriteRecipes));
  };

  console.log("favoriteRecipes", favoriteRecipes);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        error,
        handleSubmit,
        foundRecipes,
        isSubmitted,
        favoriteRecipes,
        handleFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
