import { Link } from "react-router-dom";

const Favorite = () => {
  const favoriteRecipes =
    JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

  return (
    <>
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {favoriteRecipes.map((recipe) => {
            const { image_url, title, publisher, id } = recipe;
            return (
              <Link to={`/detail/${id}`} key={id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
                  <img
                    src={image_url}
                    alt={title}
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p className="text-sm text-gray-500">
                      Publisher: {publisher}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center pt-10 text-2xl font-semibold text-gray-600">
          No favorite recipes found!
        </div>
      )}
    </>
  );
};

export default Favorite;
