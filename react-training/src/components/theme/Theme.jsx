import { useEffect, useState } from "react";   
import "./style.css";

const Theme = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const buttonStyle = theme === "light" ? "light-button" : "dark-button"; 
    const containerStyle = theme === "light" ? "light-theme" : "dark-theme";

    return (
      <div className={`container ${containerStyle}`}>
        <h1>Theme</h1>
        <div>
          <button className={`button ${buttonStyle}`} onClick={handleChangeTheme}>
            {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>
    );
}

export default Theme;