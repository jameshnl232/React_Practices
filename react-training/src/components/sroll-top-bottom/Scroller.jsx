import { useState, useEffect } from "react";

const Scroller = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=200");
      const data = await response.json();
      if (data) {
        setData(data.products.map((item) => item.title));
      }
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        bottom: 0,
        behavior: 'smooth',
    });
  };

    const handleScrollToTop = () => {
    window.scrollTo({
        bottom: document.body.scrollHeight,
        top: 0,
        behavior: 'smooth',
    });
    }

  loading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;

  return (
    <>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      {data && data.map((item, index) => <div key={index}>{item}</div>)}
      <button onClick={handleScrollToTop}>Scroll to top</button>
    </>
  );
};

export default Scroller;
