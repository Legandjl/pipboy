import { useRef } from "react";
import Input from "../Input";
import "../addForm.css";

import SubmitButton from "../SubmitButton";
import useFormControl from "../useFormControl";
import { Link } from "react-router-dom";
import Errors from "../Errors";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const AddForm = (props) => {
  const form = useRef(null);
  const { state, handleChange, handleSubmit, errors, submitting } =
    useFormControl();

  return (
    <div className="pipboyWrap">
      <Link className="home" to={"/"}>
        Home
      </Link>
      {errors.length > 0 && <Errors errors={errors} />}
      <div className="formWrap">
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
              name={"effects"}
              value={state.effects}
              onChange={handleChange}
              placeholder={"ex Charisma + 5"}
            />

            <Input
              type={"text"}
              name={"tag"}
              value={state.tag}
              onChange={handleChange}
              placeholder={"ex MED"}
            />
            <SubmitButton
              handleSubmit={handleSubmit}
              form={form}
              submitting={submitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
