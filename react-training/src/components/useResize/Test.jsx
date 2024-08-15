import useResize from "./useResize";

const Test = () => {

    const {width, height} = useResize();

    return (
        <div>
            <h1>Width: {width}</h1>
            <h1>Height: {height}</h1>
        </div>
    );
};

export default Test;