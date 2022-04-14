import { useContext, useEffect, useState } from "react";
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

  /*   item_id={itemKey}
          currentSelection={currentSelection} //refactor from being passed to using context in display panel
          dataLoading={loading}
          refresh={refresh} */

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
        console.log(e);
        //TODO Handle
      }
    };
    loadData();
  }, [currentSelection, itemKey]);

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
