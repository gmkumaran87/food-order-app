import React from "react";
import "./Card.css";
import Button from "./Button";
import CartButton from "./CartButton";

function Card(props) {
  const { img, description, name, isSelected, price, id, quantity, amount } =
    props.cart;

  return (
    <article className="card">
      <img src={img} alt={name} className="menu-img" />
      <div className="menu-desc">
        <div className="menu-title">
          <h4>{name}</h4>
          <span className="ruppee">{price}</span>
        </div>

        <p>{description}</p>
        {isSelected ? (
          <CartButton id={id} qty={quantity} amt={amount} />
        ) : (
          <Button className={"cart-btn"} data={"cart"} id={id}>
            Add to Cart
          </Button>
        )}
      </div>
    </article>
  );
}

export default Card;
