import { useEffect, useState } from "react";
import Detail from "../detail/Detail";
import "./displayPanel.css";

const DisplayPanel = (props) => {
  const url = "https://frozen-springs-98647.herokuapp.com/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //loading == true
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `${url}api/${props.currentSelection.toLowerCase()}/${props.item_id}`
        );
        const jsonData = await data.json();
        setData(jsonData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, [props.currentSelection, props.id, props.item_id]);

  return (
    <div className="displayPanel">{!loading && <Detail item={data} />}</div>
  );
};

export default DisplayPanel;
