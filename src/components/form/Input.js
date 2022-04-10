const Input = (props) => {
  return (
    <div className="input">
      <p>{props.name}</p>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
