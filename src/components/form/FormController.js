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
  const { state, handleChange, handleSubmit, errors } = useFormControl();

  const errorElements = errors.map((err) => {
    console.log(err.msg);
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
          />
        )}
        {currentSelection === "Armor" && (
          <ArmorForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        {currentSelection === "Aid" && (
          <AidForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        {currentSelection === "Misc" && (
          <MiscForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default FormController;
