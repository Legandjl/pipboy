import Category from "../categories/Category";

const Footer = (props) => {
  const catElements = props.categories.map((item, index) => {
    return (
      <Category
        type={item}
        handleClick={props.handleClick}
        index={index}
        currentSelection={props.currentSelection}
      />
    );
  });
  return <div className="catWrap">{catElements}</div>;
};

export default Footer;
