import { useEffect, useState } from "react";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [itemKey, setItemKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://frozen-springs-98647.herokuapp.com/";
  useEffect(() => {
    //loading == true
    const loadData = async () => {
      const data = await fetch(`${url}api/weapons/`);
      const jsonData = await data.json();
      setData(jsonData);
      console.log(jsonData);
      setItemKey(jsonData[0]._id);
      setLoading(false);
    };
    if (loading) {
      loadData();
    }
  }, [loading]);

  return [loading, data, itemKey, setItemKey];
};

export default useDataLoader;
