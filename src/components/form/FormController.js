import { useContext } from "react";

import "./addForm.css";
import { CurrentSelectionContext } from "../../context/CurrentSelection";

import { Link } from "react-router-dom";
import WeaponForm from "./form_types/WeaponForm";
import ArmorForm from "./form_types/ArmorForm";
import AidForm from "./form_types/AidForm";
import MiscForm from "./form_types/MiscForm";
import useFormControl from "./useFormControl";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const FormController = () => {
  const { currentSelection } = useContext(CurrentSelectionContext);
  const { state, handleChange, handleSubmit, errors, submitting } =
    useFormControl();

  const errorElements = errors.map((err) => {
    return (
      <div>
        <p>{err.msg}</p>
      </div>
    );
  });

  return (
    <div className="pipboyWrap">
      <Link className="home" to={"/"}>
        Home
      </Link>
      {errors.length > 0 && <div className="errorsWrap"> {errorElements} </div>}
      <div className="formWrap">
        {currentSelection === "Weapons" && (
          <WeaponForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
        {currentSelection === "Armor" && (
          <ArmorForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
        {currentSelection === "Aid" && (
          <AidForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
        {currentSelection === "Misc" && (
          <MiscForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
};

export default FormController;
