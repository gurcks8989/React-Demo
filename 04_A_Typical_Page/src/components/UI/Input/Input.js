import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const randomId = Math.random();

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${props.className} ${
        props.isValid !== undefined && !props.isValid && classes.invalid
      }`}
    >
      <label htmlFor={props.id || randomId}>{props.children}</label>
      <input
        ref={inputRef}
        type={props.type || "text"}
        id={props.id || randomId}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
