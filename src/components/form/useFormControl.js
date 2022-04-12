import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  switch (action.type) {
    case "REPLACE_STATE":
      return action.payLoad;
    case "UPDATE":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const useFormControl = () => {
  const nav = useNavigate();
  let { id, selection } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const { currentSelection, url } = useContext(CurrentSelectionContext);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetch(`${url}${selection.toLowerCase()}/${id}`);
        const jsonData = await data.json();
        console.log(jsonData);
        dispatch({ type: "REPLACE_STATE", payLoad: jsonData });
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    if (id === undefined) {
      setIsLoading(false);
    }
    if (isLoading && id !== undefined) {
      loadData();
      //set state to data from form
    }
  }, [currentSelection, id, isLoading, selection, url]);

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
    dispatch({ type: "UPDATE", field: e.target.name, value: e.target.value });
  };

  return { state, handleChange, handleSubmit, isLoading };
};

export default useFormControl;
