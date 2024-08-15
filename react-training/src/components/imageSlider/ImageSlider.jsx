import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(
    async (url) => {
      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data) {
          setImages(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [page, limit]
  );

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url, fetchImages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePrev = () => {
    console.log(currentImage);
    console.log(images.length);
    currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1);
  };

  const handleNext = () => {
    console.log(currentImage);
    console.log(images.length);
    currentImage === images.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
  };

  const handleCurrentImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow left-arrow"
        onClick={handlePrev}
      />

      {images.length > 0 && images
        ? images.map((image, index) => {
            return (
              <img
                key={index}
                src={image.download_url}
                alt={image.download_url}
                className={
                  index === currentImage ? "active-image" : "inactive-image"
                }
              />
            );
          })
        : null}

      <span className="circle-indicator">
        {images.length > 0 && images
          ? [...Array(images.length)].map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    handleCurrentImage(index);
                  }}
                  className={
                    index === currentImage
                      ? "active-indicator"
                      : "inactive-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>

      <BsArrowRightCircleFill
        className="arrow right-arrow"
        onClick={handleNext}
      />
    </div>
  );
};
export default ImageSlider;
