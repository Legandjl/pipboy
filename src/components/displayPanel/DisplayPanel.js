import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import WeaponLoader from "../../loaders/WeaponLoader";
import Detail from "../detail/Detail";
import "./displayPanel.css";

//Display area for inventory item details
const DisplayPanel = (props) => {
  const url = "https://frozen-springs-98647.herokuapp.com/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { currentSelection, itemKey } = useContext(CurrentSelectionContext);
  const nav = useNavigate();

  useEffect(() => {
    //loading == true
    const loadData = async () => {
      try {
        setLoading(true);
        if (itemKey !== null) {
          const data = await fetch(
            `${url}api/${currentSelection.toLowerCase()}/${itemKey}`
          );
          const jsonData = await data.json();
          setData(jsonData);
        }
        setLoading(false);
      } catch (e) {
        nav("/oops", { replace: true });
      }
    };
    loadData();
  }, [currentSelection, itemKey, nav]);

  return (
    <div className="displayPanel">
      {!loading ? (
        <Detail item={data} refresh={props.refresh} />
      ) : (
        <WeaponLoader />
      )}
    </div>
  );
};

export default DisplayPanel;
