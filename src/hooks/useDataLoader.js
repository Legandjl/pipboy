import { useContext, useEffect, useState } from "react";
import { CurrentSelectionContext } from "../context/CurrentSelection";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentSelection, updateSelection, url, itemKey, setItemKey } =
    useContext(CurrentSelectionContext);

  const handleRefresh = (i) => {
    console.log("clicking");
    setItemKey(null);
    updateSelection(i);
    setLoading(true);
  };

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    //loading == true
    const loadData = async () => {
      try {
        const data = await fetch(`${url}${currentSelection.toLowerCase()}/`);
        if (!data.ok) {
          throw new Error("Could not fetch the resource");
        }
        const jsonData = await data.json();
        setData(jsonData);
        if (itemKey === null) {
          //if item key is null set the selected item to the first
          // so styling is applied in list to first
          setItemKey(jsonData[0]._id);
        }
        setLoading(false);
      } catch (e) {
        console.log(e);
        //TODO HANDLE
      }
    };
    if (loading) {
      loadData();
    }
  }, [currentSelection, itemKey, loading, setItemKey, url]);

  return [loading, data, handleRefresh, refresh];
};

export default useDataLoader;
