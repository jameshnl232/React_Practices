import classes from "./AccodianContent.module.css";

const AccodianContent = ({
  item,
  selected,
  handleSingleSelection,
  multipleSelected,
  handleMultipleSelection,
  isMultiple,
}) => {
  return (
    <div
      className={classes.item}
      onClick={
        isMultiple
          ? () => {
              handleMultipleSelection(item.id);
            }
          : () => {
              handleSingleSelection(item.id);
            }
      }
    >
        <div className={classes.title}>
            {item.question}
        </div>

        {isMultiple ? multipleSelected.includes(item.id) && (
            <div className={classes.content}>
                {item.answer}
            </div>
        ) : selected === item.id && (
            <div className={classes.content}>
                {item.answer}
            </div>
        )}
        
    </div>
  );
};

export default AccodianContent;
