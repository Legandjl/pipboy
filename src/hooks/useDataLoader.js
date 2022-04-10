import { useContext, useEffect, useState } from "react";
import { CurrentSelectionContext } from "../context/CurrentSelection";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [itemKey, setItemKey] = useState(null);
  //_id of the first item in the fetched data
  //used to apply styling in the list component
  //item key is updated to the currently clicked item ID
  //whenever user clicks in list
  const [loading, setLoading] = useState(true);
  // Fetches the requested category data

  const { currentSelection, updateSelection, url } = useContext(
    CurrentSelectionContext
  );
  const handleClick = (i) => {
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
        setItemKey(jsonData[0]._id);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading) {
      loadData();
    }
  }, [currentSelection, loading, url]);

  return [
    loading,
    data,
    itemKey,
    setItemKey,
    handleClick,
    currentSelection,
    refresh,
  ];
};

export default useDataLoader;
