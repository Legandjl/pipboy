const SubmitButton = (props) => {
  return (
    <button
      disabled={props.submitting}
      onClick={(e) => {
        e.preventDefault();
        props.handleSubmit(props.form);
      }}
      className={"submit"}
    >
      {!props.submitting ? "Submit" : "..."}
    </button>
  );
};

export default SubmitButton;
