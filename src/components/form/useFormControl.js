import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentSelectionContext } from "../../context/CurrentSelection";

const initialFormState = {
  name: "",
  val: "",
  weight: "",
  condition: "",
  dam: "",
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
  const { currentSelection, url, setItemKey } = useContext(
    CurrentSelectionContext
  );
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetch(`${url}${selection.toLowerCase()}/${id}`);
        const jsonData = await data.json();
        dispatch({ type: "REPLACE_STATE", payLoad: jsonData });
      } catch (e) {
        nav("/oops", { replace: true });
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
  }, [currentSelection, id, isLoading, nav, selection, url]);

  const handleSubmit = async (form) => {
    if (form.current.checkValidity()) {
      try {
        setSubmitting(true);
        const response = await fetch(
          `${url}${currentSelection.toLowerCase()}${
            id !== undefined ? "/" + id : ""
          }`,
          {
            method: id === undefined ? "POST" : "PUT",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify(state),
          }
        );
        const res = await response.json();

        if (res.errors) {
          setErrors(res.errors);
          setSubmitting(false);
          return;
        }
        if (!res.id) {
          throw new Error("Data could not be loaded");
        }
        setItemKey(res.id);
        nav("/", { replace: false });
      } catch (e) {
        //navigate to something went wrong page
        nav("/oops", { replace: true });
      }
    } else {
      form.current.reportValidity();
    }
  };

  const handleChange = (e) => {
    dispatch({ type: "UPDATE", field: e.target.name, value: e.target.value });
  };

  return { state, handleChange, handleSubmit, isLoading, errors, submitting };
};

export default useFormControl;
