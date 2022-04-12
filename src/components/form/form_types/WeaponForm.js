import { useRef } from "react";
import Input from "../Input";
import "../addForm.css";
import useFormControl from "../useFormControl";
import SubmitButton from "../SubmitButton";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const WeaponForm = () => {
  const { state, handleChange, handleSubmit, errors } = useFormControl();
  const form = useRef(null);
  return (
    <div className="formBorder">
      <form ref={form}>
        <Input
          type={"text"}
          name={"name"}
          value={state.name}
          onChange={handleChange}
          placeholder={"3 - 10 characters"}
        />
        <Input
          type={"number"}
          name={"val"}
          value={state.val}
          onChange={handleChange}
          placeholder={"1-9999"}
          min={1}
          max={9999}
        />
        <Input
          type={"number"}
          name={"weight"}
          value={state.weight}
          onChange={handleChange}
          placeholder={"1-999"}
          min={1}
          max={999}
        />
        <Input
          type={"text"}
          name={"damage"}
          value={state.dam}
          onChange={handleChange}
          placeholder={"1-99"}
          min={1}
          max={99}
        />
        <Input
          type={"text"}
          name={"condition"}
          value={state.condition}
          onChange={handleChange}
          placeholder={"1-99"}
          min={1}
          max={99}
        />
        <SubmitButton handleSubmit={handleSubmit} form={form} />
      </form>
    </div>
  );
};

export default WeaponForm;
