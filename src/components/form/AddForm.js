import { useReducer } from "react";
import Input from "./Input";
import "./addForm.css";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const initialFormState = {
  name: "",
  val: "",
};

const reducer = (state, action) => {
  return { ...state, [action.field]: [action.value] };
};

const AddForm = () => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return (
    <div className="pipboyWrap">
      <div className="formWrap">
        <Input
          type={"text"}
          name={"name"}
          value={state.name}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"val"}
          value={state.val}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddForm;
