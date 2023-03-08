const Input = (props) => {
  return (
    <div className={`form-control ${props.className || ""} ${props.hasError && "invalid"}`}>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.hasError && <p className="error-text">{props.errorText}</p>}
    </div>
  );
};

export default Input;
