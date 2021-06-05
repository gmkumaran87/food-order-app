import React from "react";
import "./Button.css";
import { useGlobalContext } from "../Context";

function Button(props) {
  const classes = `btn ${props.className}`;
  const { filterCategory, addtoCart, cartItems } = useGlobalContext();

  const handleOnclick = (e) => {
    const currentEl = e.target.dataset.type;

    if (currentEl === "category") {
      filterCategory(props.category);
    } else if (currentEl === "cart") {
      addtoCart(e.target.dataset.id);
    }
  };

  return (
    <button
      type="button"
      className={classes}
      data-id={props.id}
      data-type={props.data}
      onClick={handleOnclick}
    >
      {props.children}
    </button>
  );
}

export default Button;
