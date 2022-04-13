import { useContext } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import useDataLoader from "../../hooks/useDataLoader";
import DisplayPanel from "../displayPanel/DisplayPanel";
import Footer from "../footer/Footer";
import ItemList from "../list/ItemList";
import { Link } from "react-router-dom";
import "./pipboy.css";
import WeaponLoader from "../../loaders/WeaponLoader";
import ListLoader from "../../loaders/ListLoader";

const Pipboy = () => {
  const [
    loading,
    data,
    itemKey,
    setItemKey,
    handleClick,
    currentSelection,
    refresh,
  ] = useDataLoader();

  const { categories } = useContext(CurrentSelectionContext);

  // itemList calls function
  //passes the id of the currently clicked item to dataLoader
  // displaypanel uses this id to fetch a specific item for display
  const handleItemDisplay = (id) => {
    setItemKey(id);
  };

  return (
    <div className="pipboyWrap">
      <div className="new">
        {" "}
        <Link to={"/new"}>
          <i className="ri-add-line"></i>
        </Link>
      </div>
      {!loading ? (
        <ItemList
          items={data}
          handleItemDisplay={handleItemDisplay}
          selected={itemKey}
        />
      ) : (
        <ListLoader />
      )}
      {!loading ? (
        <DisplayPanel
          item_id={itemKey}
          currentSelection={currentSelection} //refactor from being passed to using context in display panel
          dataLoading={loading}
          refresh={refresh}
        />
      ) : (
        <WeaponLoader />
      )}
      <Footer
        handleClick={handleClick}
        currentSelection={currentSelection}
        categories={categories}
      />
    </div>
  );
};

export default Pipboy;
