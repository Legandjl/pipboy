import { useEffect, useState } from "react";
import useDataLoader from "../../hooks/useDataLoader";
import DisplayPanel from "../displayPanel/DisplayPanel";
import Footer from "../footer/footer";
import ItemList from "../list/itemList";
import "./pipboy.css";

const Pipboy = () => {
  const weapons = "Weapons";
  const armor = "Armor";
  const aid = "Aid";
  const misc = "Misc";
  const categories = [weapons, armor, aid, misc];
  const [currentSelection, setCurrentSelection] = useState(categories[0]);
  const [loading, data, itemKey, setItemKey] = useDataLoader();

  const handleClick = (i) => {
    setCurrentSelection((prev) => {
      const newSelection = categories[i];
      return newSelection;
    });
  };
  const handleItemDisplay = (id) => {
    setItemKey(id);
  };

  return (
    <div className="pipboyWrap">
      <ItemList
        items={data}
        handleItemDisplay={handleItemDisplay}
        selected={itemKey}
      />
      {!loading && <DisplayPanel item_id={itemKey} />}
      <Footer
        handleClick={handleClick}
        currentSelection={currentSelection}
        categories={categories}
      />
    </div>
  );
};

export default Pipboy;
