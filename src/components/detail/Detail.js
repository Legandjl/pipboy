import "./detail.css";
import Functions from "./Functions";
const Detail = (props) => {
  const toDisplay = [];
  for (const [key, val] of Object.entries(props.item)) {
    if (
      key !== "_id" &&
      key !== "__v" &&
      key !== "category" &&
      key !== "name" &&
      key !== "tag"
    ) {
      toDisplay.push(
        <div
          className={
            key === "effects"
              ? "effects itemDetailDisplay"
              : "itemDetailDisplay"
          }
        >
          <p>{key === "condition" ? "Con" : key}</p>
          <p>{val}</p>
        </div>
      );
    }
  }
  return (
    <div className="details">
      <Functions id={props.item._id} />
      {toDisplay}
    </div>
  );
};

export default Detail;
