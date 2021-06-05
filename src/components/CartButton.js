import React from "react";
import { useGlobalContext } from "../Context";

function CartButton(props) {
  const { id, qty, amt } = props;
  const { modifyItem } = useGlobalContext();

  return (
    <div className="price-cart">
      <div className="add-cart">
        <div className="decrease" onClick={(e) => modifyItem(e, id)}>
          <img
            src="https://res.cloudinary.com/gmkumaran87/image/upload/v1622725000/minus-sign_qbor3i.svg"
            alt="minus"
            className="addDec-img"
          />
        </div>{" "}
        <span className="cart-qty"> {qty} </span>{" "}
        <div className="increase" onClick={(e) => modifyItem(e, id)}>
          <img
            src="https://res.cloudinary.com/gmkumaran87/image/upload/v1622724834/plus_o5ki2v.svg"
            alt="plus"
            className="addDec-img"
          />
        </div>{" "}
      </div>{" "}
      <span className="price"> {amt} </span>{" "}
    </div>
  );
}

export default CartButton;
