import React, { useState } from "react";

const CurrentSelectionContext = React.createContext();

const CurrentSelectionContextProvider = (props) => {
  const weapons = "Weapons";
  const armor = "Armor";
  const aid = "Aid";
  const misc = "Misc";
  const categories = [weapons, armor, aid, misc];
  const [currentSelection, setCurrentSelection] = useState(categories[0]);
  const url = "https://frozen-springs-98647.herokuapp.com/api/";
  const [itemKey, setItemKey] = useState(null);

  //Allows entire application to access the current selected category type

  const updateItemKey = (id) => {
    setItemKey(id);
  };

  const handleClick = (i) => {
    setCurrentSelection((prev) => {
      const newSelection = categories[i];
      return newSelection;
    });
  };
  return (
    <CurrentSelectionContext.Provider
      value={{
        currentSelection: currentSelection,
        updateSelection: handleClick,
        categories: categories,
        url: url,
        itemKey: itemKey,
        setItemKey: updateItemKey,
      }}
    >
      {props.children}
    </CurrentSelectionContext.Provider>
  );
};

export { CurrentSelectionContext, CurrentSelectionContextProvider };
