//generate random hex color
export const generateRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//generate random rgb color
export const generateRandomRGBColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

//transform hex color to rgb color
export const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

//transform rgb color to hex color
export const rgbToHex = (rgb) => {
    const [r, g, b] = rgb.slice(4, -1).split(',').map((color) => parseInt(color));
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}