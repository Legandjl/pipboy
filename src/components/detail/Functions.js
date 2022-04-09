import { useContext, useState } from "react";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import useDelete from "../../hooks/useDelete";

const Functions = (props) => {
  const [showDel, setShowDel] = useState(true);
  const { url, currentSelection } = useContext(CurrentSelectionContext);
  const [handleDelete] = useDelete();

  return (
    <div className="functionMenu">
      {showDel && <p>(Edit </p>}

      {showDel ? (
        <p
          onClick={() => {
            setShowDel(false);
          }}
        >
          (Delete
        </p>
      ) : (
        <div className="delConfirm">
          {" "}
          <p
            onClick={() => {
              setShowDel(true);
            }}
          >
            (Cancel
          </p>{" "}
          <p
            onClick={async () => {
              await handleDelete(
                `${url}${currentSelection.toLowerCase()}/${props.id}`
              );
              props.refresh();
              //refresh
            }}
          >
            (Confirm
          </p>
        </div>
      )}
    </div>
  );
};

export default Functions;
