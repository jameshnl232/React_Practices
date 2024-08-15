import "./styles.css";
import { useCallback, useEffect, useState } from "react";

const ScrollIndicator = () => {

    const [procent, setProcent] = useState(0);

    const handleScroll = useCallback( () => {
        const scroll = document.documentElement.scrollTop;
        console.log(`howmuch scrolled: ${scroll}`);
        
        //height
        const height = document.documentElement.scrollHeight  - document.documentElement.clientHeight;
        console.log(`height: ${height}`);
        setProcent(`${(scroll / height) * 100}%`);
        console.log(`procent: ${procent}`);
    }, [procent]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);


  return (
    <div className="progress-container">
        <div className="progress-bar" style={{width: `${procent}`}}>
        </div>
    </div>
  );
};

export default ScrollIndicator;