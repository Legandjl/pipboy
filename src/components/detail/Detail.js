import "./detail.css";
import Functions from "./Functions";
const Detail = (props) => {
  //Details for specific inventory items
  const toDisplay = [];
  for (const [key, val] of Object.entries(props.item)) {
    // Loop through and create individual detail divs
    // Needs refactor into <DetailDisplay/> component
    if (
      key !== "_id" &&
      key !== "__v" &&
      key !== "category" &&
      key !== "name" &&
      key !== "tag"
    ) {
      toDisplay.push(
        <div
          key={key}
          className={
            key === "effects"
              ? "effects itemDetailDisplay"
              : "itemDetailDisplay"
          }
        >
          <p>{key === "condition" ? "Con:" : `${key}:`}</p>
          <p>{val}</p>
        </div>
      );
    }
  }

  return (
    <div className="details">
      <Functions id={props.item._id} refresh={props.refresh} />
      {toDisplay}
    </div>
  );
};

export default Detail;
