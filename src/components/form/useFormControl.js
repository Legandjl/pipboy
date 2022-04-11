import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentSelectionContext } from "../../context/CurrentSelection";

const initialFormState = {
  name: "",
  val: "",
  weight: "",
  condition: "",
  damage: "",
  effects: "",
  tag: "",
};

const reducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const useFormControl = () => {
  const nav = useNavigate();
  const [errors, setErrors] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { currentSelection, url } = useContext(CurrentSelectionContext);

  const handleSubmit = async (form) => {
    if (form.current.checkValidity()) {
      const response = await fetch(`${url}${currentSelection.toLowerCase()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(state),
      });
      const res = await response.json();
      if (res.errors) {
        //errors exist so handle
        //errors to state
        //show in addform
        setErrors(res.errors);
        return nav("/new", { replace: true });
      }
      if (!res.data) {
        //navigate to something went wrong page
        return nav("/new", { replace: true });
      }
      nav("/", { replace: true });
    } else {
      form.current.reportValidity();
    }
  };

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return { state, handleChange, handleSubmit };
};

export default useFormControl;
