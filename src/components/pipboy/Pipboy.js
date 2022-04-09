import { useContext } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import useDataLoader from "../../hooks/useDataLoader";
import DisplayPanel from "../displayPanel/DisplayPanel";
import Footer from "../footer/footer";
import ItemList from "../list/itemList";
import "./pipboy.css";

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
        <i class="ri-add-line"></i>
      </div>
      <ItemList
        items={data}
        handleItemDisplay={handleItemDisplay}
        selected={itemKey}
      />
      {!loading && (
        <DisplayPanel
          item_id={itemKey}
          currentSelection={currentSelection}
          dataLoading={loading}
          refresh={refresh}
        />
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
