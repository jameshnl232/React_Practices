import heroImage from "../../assets/recipe_web_app_hero_pic.jpg";
import SearchBar from "./SearchBar";
import { useRef, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const HeroSection = ({ onClick }) => {
  const ref = useRef(null);

  const { foundRecipes, isSubmitted, loading } = useContext(GlobalContext);

  const handleClick = () => {
    console.log("clicked");
    ref.current.focus();
    onClick();
  };

  return (
    <div
      className="  px-6 pt-14 lg:px-8  bg-center bg-cover bg-blend-overlay bg-black/50 text-gray-200 min-h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="lg:text-7xl"> Simple, fast, easy </span> recipes
            for everyone
          </h1>
          <p className=" mt-6 text-lg leading-8 italic text-gray-300 ">
            Get your favourite recipes in one place. Easy to follow instructions
            and ingredients. Get started now!
          </p>

          <div className="pt-10">
            <SearchBar ref={ref} />
          </div>
          {isSubmitted && foundRecipes.length != 0 && !loading ? (
            <div className="mt-10 flex items-center justify-center gap-x-6 relative">
              <button onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 animate-bounce mt-6 lg:size-18"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
