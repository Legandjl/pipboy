import { useContext } from "react";

import "./addForm.css";
import { CurrentSelectionContext } from "../../context/CurrentSelection";

import { Link } from "react-router-dom";
import WeaponForm from "./form_types/WeaponForm";
import ArmorForm from "./form_types/ArmorForm";
import AidForm from "./form_types/ArmorForm";
import MiscForm from "./form_types/MiscForm";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const FormController = () => {
  const { currentSelection } = useContext(CurrentSelectionContext);

  return (
    <div className="pipboyWrap">
      <Link className="home" to={"/"}>
        Home
      </Link>
      <div className="formWrap">
        {currentSelection === "Weapons" && <WeaponForm />}
        {currentSelection === "Armor" && <ArmorForm />}
        {currentSelection === "Aid" && <AidForm />}
        {currentSelection === "Misc" && <MiscForm />}
      </div>
    </div>
  );
};

export default FormController;
