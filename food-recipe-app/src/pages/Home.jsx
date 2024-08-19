import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useRef } from "react";

const Home = () => {
  const { foundRecipes } = useContext(GlobalContext);
  const ProductListRef = useRef(null);

  const handleScroll = () => {
    ProductListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection onClick={handleScroll} />
      <div
        ref={ProductListRef}
        className={foundRecipes.length != 0 ? "min-h-screen" : "hidden"}
      >
        <ProductList />
      </div>
    </>
  );
};

export default Home;
