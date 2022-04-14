import useDataLoader from "../../hooks/useDataLoader";
import DisplayPanel from "../displayPanel/DisplayPanel";
import Footer from "../footer/Footer";
import ItemList from "../list/ItemList";
import { Link } from "react-router-dom";
import "./pipboy.css";
import WeaponLoader from "../../loaders/WeaponLoader";
import ListLoader from "../../loaders/ListLoader";
import { useContext } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";

const Pipboy = () => {
  const [loading, data, handleRefresh, refresh] = useDataLoader();
  const { currentSelection } = useContext(CurrentSelectionContext);

  return (
    <div className="pipboyWrap">
      <div className="new">
        {" "}
        <Link to={`/new/${currentSelection}`}>
          <i className="ri-add-line"></i>
        </Link>
      </div>
      {!loading ? <ItemList items={data} /> : <ListLoader />}
      {!loading ? (
        <DisplayPanel dataLoading={loading} refresh={refresh} />
      ) : (
        <WeaponLoader />
      )}
      <Footer handleClick={handleRefresh} />
    </div>
  );
};

export default Pipboy;
