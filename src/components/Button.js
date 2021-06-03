import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button type="button" className={props.value}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
