import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import "../scrollIndicator/styles.css";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";

const ImageLoader = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          page === 0 ? 0 : page * 10
        }`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
    
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  loading && <div>Loading...</div>;

  error && <div>Error: {error.message}</div>;

 const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <ScrollIndicator />
      <div className="container">
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <div key={index} className="card">
              <img src={product.thumbnail} alt={product.title} />
              <div className="card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price} $</p>
              </div>
            </div>
          ))}
      </div>
      <button className="button" onClick={handleLoadMore}>Load More</button>
    </>
  );
};

export default ImageLoader;
