import { useRef } from "react";
import Input from "../Input";
import "../addForm.css";

import SubmitButton from "../SubmitButton";

//https://medium.com/swlh/usereducer-explained-d70e920692e

const AddForm = (props) => {
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
          name={"effects"}
          value={props.state.effects}
          onChange={props.handleChange}
          placeholder={"ex Charisma + 5"}
        />

        <Input
          type={"text"}
          name={"tag"}
          value={props.state.tag}
          onChange={props.handleChange}
          placeholder={"ex MED"}
        />
        <SubmitButton
          handleSubmit={props.handleSubmit}
          form={form}
          submitting={props.submitting}
        />
      </form>
    </div>
  );
};

export default AddForm;
