import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentSelectionContext } from "../../context/CurrentSelection";
import useDelete from "../../hooks/useDelete";

// Edit and Delete inventory item functionality
const Functions = (props) => {
  const [showDel, setShowDel] = useState(true);
  const { url, currentSelection } = useContext(CurrentSelectionContext);
  const [handleDelete] = useDelete();

  return (
    <div className="functionMenu">
      {showDel && (
        <Link to={`/edit/${currentSelection}/${props.id}`}>(Edit</Link>
      )}

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
          <p
            onClick={async () => {
              await handleDelete(
                `${url}${currentSelection.toLowerCase()}/${props.id}`
              );
              props.refresh();
              //refresh
            }}
          >
            (Confirm{" "}
          </p>
          <p
            onClick={() => {
              setShowDel(true);
            }}
          >
            (Cancel
          </p>
        </div>
      )}
    </div>
  );
};

export default Functions;
