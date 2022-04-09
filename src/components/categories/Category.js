import "./category.css";

const Category = (props) => {
  const isSelected = props.type === props.currentSelection;

  return (
    <div
      className="categoryLink"
      onClick={() => {
        props.handleClick(props.index);
      }}
    >
      {isSelected && <div className="linkOverlay"></div>}
      <p>{props.type}</p>
    </div>
  );
};

export default Category;
