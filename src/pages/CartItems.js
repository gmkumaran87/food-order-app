import React from "react";
import CartButton from "../components/CartButton";

const CartItems = (props) => {
  const { name, category, price } = props.cart;

  console.log(name, category, price);
  return (
    <article className="item">
      <div className="item-left">
        <h4>{name}</h4>
        <h4>{category}</h4>
        <span>{price}</span>
      </div>
      <CartButton />
    </article>
  );
};

export default CartItems;
