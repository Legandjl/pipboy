import { useRef } from "react";
import Input from "../Input";
import "../addForm.css";

import SubmitButton from "../SubmitButton";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const WeaponForm = (props) => {
  const form = useRef(null);
  return (
    <div className="formBorder">
      <form ref={form}>
        <Input
          type={"text"}
          name={"name"}
          value={props.state.name}
          onChange={props.handleChange}
          placeholder={"3 - 10 characters"}
        />
        <Input
          type={"number"}
          name={"val"}
          value={props.state.val}
          onChange={props.handleChange}
          placeholder={"1-9999"}
          min={1}
          max={9999}
        />
        <Input
          type={"number"}
          name={"weight"}
          value={props.state.weight}
          onChange={props.handleChange}
          placeholder={"1-999"}
          min={1}
          max={999}
        />
        <Input
          type={"text"}
          name={"dam"}
          value={props.state.dam}
          onChange={props.handleChange}
          placeholder={"1-99"}
          min={1}
          max={99}
        />
        <Input
          type={"text"}
          name={"condition"}
          value={props.state.condition}
          onChange={props.handleChange}
          placeholder={"1-99"}
          min={1}
          max={99}
        />
        <SubmitButton handleSubmit={props.handleSubmit} form={form} />
      </form>
    </div>
  );
};

export default WeaponForm;
