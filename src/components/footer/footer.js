import { useContext } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import Category from "../categories/Category";

const Footer = (props) => {
  const { currentSelection, categories } = useContext(CurrentSelectionContext);
  const catElements = categories.map((item, index) => {
    return (
      <Category
        key={item}
        type={item}
        handleClick={props.handleClick}
        index={index}
        currentSelection={currentSelection}
      />
    );
  });
  return <div className="catWrap">{catElements}</div>;
};

export default Footer;
