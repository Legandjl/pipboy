import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentSelectionContext } from "../context/CurrentSelection";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentSelection, updateSelection, url, itemKey, setItemKey } =
    useContext(CurrentSelectionContext);

  const nav = useNavigate();

  const handleRefresh = (i) => {
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
        nav("/oops", { replace: true });
      }
    };
    if (loading) {
      loadData();
    }
  }, [currentSelection, itemKey, loading, nav, setItemKey, url]);

  return [loading, data, handleRefresh, refresh];
};

export default useDataLoader;
