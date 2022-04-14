const Errors = (props) => {
  const errorElements = props.errors.map((err) => {
    return <p>{err.msg}</p>;
  });
  return <div className="errorsWrap"> {errorElements} </div>;
};

export default Errors;
