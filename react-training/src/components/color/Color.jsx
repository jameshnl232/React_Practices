import {useState} from 'react';
import { generateRandomHexColor, generateRandomRGBColor, hexToRgb, rgbToHex } from './utils';


const Button = ({children, onClick}) => {

    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}


const Color = () => {

    const [color, setColor] = useState("#ffffff");
    const [isHex, setIsHex] = useState(true);

    const handleHexColor = (color) => {
        console.log(color);
        if(!isHex) {
            setIsHex(!isHex);
            const newColor = rgbToHex(color);
            setColor(newColor);
        }
        
    }

    const handleRGBColor = (color) => {
        console.log(color);
        if(isHex) {
            setIsHex(!isHex);
            const newColor = hexToRgb(color);
            setColor(newColor);
        }
    }

    const handleRandomColor = () => {
        console.log(color);
        const newColor = isHex ? generateRandomHexColor : generateRandomRGBColor;
        setColor(newColor); 
    }

    return (
        <div style={{backgroundColor: `${color}`, height: "100vh"}}>
            <h1>Color</h1>
            <h2>Color: {isHex ? "HEX" : "RGB"}</h2>
            <Button onClick={() => handleHexColor(color)}>HEX color</Button>
            <Button onClick={() => handleRGBColor(color)}>RGB color</Button>
            <Button onClick={handleRandomColor}>Generate random color</Button>
            <h1>{color}</h1>
        </div>
    );  
}

export default Color;