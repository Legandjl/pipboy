import { useState } from "react";
import "./itemList.css";

const ItemList = (props) => {
  const mappedItems = props.items.map((dataItem) => {
    return (
      <div
        key={dataItem._id}
        className={
          dataItem._id === props.selected ? "listItem selected" : "listItem"
        }
        onClick={() => {
          props.handleItemDisplay(dataItem._id);
        }}
      >
        <p>{dataItem.name}</p>
      </div>
    );
  });
  return <div className="itemList">{mappedItems}</div>;
};

export default ItemList;
