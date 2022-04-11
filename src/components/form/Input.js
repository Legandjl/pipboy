const Input = (props) => {
  return (
    <div className="input">
      <p>{`${props.name}:`}</p>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        min={props.min && props.min}
        max={props.max && props.max}
      />
    </div>
  );
};

export default Input;
