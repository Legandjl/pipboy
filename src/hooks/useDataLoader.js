import { useEffect, useState } from "react";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [itemKey, setItemKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const weapons = "Weapons";
  const armor = "Armor";
  const aid = "Aid";
  const misc = "Misc";
  const categories = [weapons, armor, aid, misc];
  const [currentSelection, setCurrentSelection] = useState(categories[0]);
  const url = "https://frozen-springs-98647.herokuapp.com/";

  const handleClick = (i) => {
    setCurrentSelection((prev) => {
      const newSelection = categories[i];
      setLoading(true);
      return newSelection;
    });
  };
  useEffect(() => {
    //loading == true
    const loadData = async () => {
      try {
        const data = await fetch(
          `${url}api/${currentSelection.toLowerCase()}/`
        );
        if (!data.ok) {
          throw new Error("Could not fetch the resource");
        }
        const jsonData = await data.json();
        setData(jsonData);
        setItemKey(jsonData[0]._id);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading) {
      loadData();
    }
  }, [currentSelection, loading]);

  return [
    loading,
    data,
    itemKey,
    setItemKey,
    handleClick,
    currentSelection,
    categories,
  ];
};

export default useDataLoader;
