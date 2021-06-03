import React from "react";

function Cart() {
  return (
    <div className="add-cart">
      <div className="decrease">
        <img
          src="https://res.cloudinary.com/gmkumaran87/image/upload/v1622725000/minus-sign_qbor3i.svg"
          alt="minus"
          className="addDec-img"
        />
      </div>
      <span className="cart-qty">1</span>
      <div className="increase">
        <img
          src="https://res.cloudinary.com/gmkumaran87/image/upload/v1622724834/plus_o5ki2v.svg"
          alt="plus"
          className="addDec-img"
        />
      </div>
    </div>
  );
}

export default Cart;
