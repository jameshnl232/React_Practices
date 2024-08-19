import { useParams, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Detail = () => {
  const { id } = useParams();

  const { handleFavorite } = useContext(GlobalContext);

  const favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));

  const data = useLoaderData();

  const { cooking_time, ingredients, publisher, servings, title, image_url } =
    data.recipe;

  console.log(data.recipe);

  if (data.error) {
    return <p>Error!</p>;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={title}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image_url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-md title-font text-gray-500 tracking-widest">
              {publisher}
            </h2>
            <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
              {title}
            </h1>

            <ul className="list-disc text-gray-600 text-lg mt-5 ml-5">
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    <h2>
                      {ingredient.description}
                      <span className="font-semibold italic">
                        {ingredient.unit &&
                          `: ${ingredient.quantity}${ingredient.unit}`}{" "}
                      </span>
                    </h2>
                  </li>
                );
              })}
            </ul>

            <div className="flex-col mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <p className="text-gray-600 text-lg ">
                Cooking time: {cooking_time} minutes
              </p>
              <p className="text-gray-600 text-lg ">Servings: {servings}</p>
            </div>
            <div className="flex">
              <button
                onClick={() => handleFavorite(data.recipe)}
                className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                {favoriteRecipes?.find((recipe) => recipe.id === id)
                  ? "Remove from favorite"
                  : "Add to favorite"}
              </button>

              <button
                onClick={() => handleFavorite(data.recipe)}
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  color={
                    favoriteRecipes?.find((recipe) => recipe.id === id)
                      ? "red"
                      : "gray"
                  }
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

// load recipe details
export const loadDetails = async ({ params }) => {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
    );
    if (!response.ok) {
      throw new Error("Failed to load recipe details");
    }
    const data = await response.json();
    return data?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
