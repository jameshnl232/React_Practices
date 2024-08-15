import { FaStar } from "react-icons/fa";
import { useState } from "react";

const styles = { display: "flex", justifyContent: "center" };

const Star = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleOnClick = (value) => {
        setRating(value);
    };

    const handleOnMouseOver = (value) => {
        setHover(value);
    };

    const handleOnMouseLeave = () => {
        setHover(0);
    };

  return (
    <div style={styles}>
      {[...Array(10)].map((_, index) => (
        <FaStar key={index} style={{fontSize: "5em"}} 
        color={(hover || rating) > index ? "yellow" : "gray"}	
        onClick={() => handleOnClick(index + 1)}
        onMouseOver={() => handleOnMouseOver(index + 1)}
        onMouseLeave={handleOnMouseLeave}
        />
        ))}
    </div>
  );
};

export default Star;
