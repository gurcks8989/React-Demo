import React, { useRef, useEffect } from "react";

import classes from "./Input.module.css";

const randomId = Math.random();

const Input = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus() ;
  }, []) ;

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
};

export default Input;
