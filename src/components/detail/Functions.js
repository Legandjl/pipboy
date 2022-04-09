import { useState } from "react";

const Functions = (props) => {
  const [showDel, setShowDel] = useState(true);
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
            onClick={() => {
              console.log(props.id);
              //delete item
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
