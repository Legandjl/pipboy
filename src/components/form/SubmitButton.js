const SubmitButton = (props) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        props.handleSubmit(props.form);
      }}
      className="submit"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
