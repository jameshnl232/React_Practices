import classes from "./Accodian.module.css";
import data from "./data";
import { useState } from "react";
import AccordionContent from "./AccodianContent";

const Accordion = () => {
  //single seletction

  const [selected, setSelected] = useState(null);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);

  const handleSingleSelection = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleIsMultiple = () => {
    setIsMultiple(!isMultiple);
  };

  const handleMultipleSelection = (id) => {
    if (multipleSelected.includes(id)) {
      setMultipleSelected(multipleSelected.filter((item) => item !== id));
    } else {
      setMultipleSelected([...multipleSelected, id]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={handleIsMultiple}>
        Multiple Selection
      </button>
      <div className={classes.accordian}>
        {data && data.length > 0
          ? data.map((item) => (
              <AccordionContent
                key={item.id}
                item={item}
                selected={selected}
                handleSingleSelection={handleSingleSelection}
                multipleSelected={multipleSelected}
                handleMultipleSelection={handleMultipleSelection}
                isMultiple={isMultiple}
              />
            ))
          : "No data available"}
      </div>
    </div>
  );
};

export default Accordion;
