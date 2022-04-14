import { useContext } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import "./itemList.css";

const ItemList = (props) => {
  const { setItemKey, itemKey } = useContext(CurrentSelectionContext);
  const mappedItems = props.items.map((dataItem) => {
    return (
      <div
        key={dataItem._id}
        className={
          dataItem._id === itemKey ? "listItem selected" : "listItem"
          // apply styling to list item if it is the current selection
        }
        onClick={() => {
          setItemKey(dataItem._id);
        }}
      >
        <p>{dataItem.name}</p>
      </div>
    );
  });
  return <div className="itemList">{mappedItems}</div>;
};

export default ItemList;
