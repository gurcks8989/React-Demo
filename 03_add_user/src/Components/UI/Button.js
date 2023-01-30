import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      // 값이 지정되지 않을 경우 default로 button
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
