import React from "react";
import "./Card.css";
import Button from "./Button";
import Cart from "./Cart";

function Card(props) {
  const { img, description, name, isSelected, price } = props.cart;
  console.log(`img`, img);
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
          <Cart />
        ) : (
          <Button value={"cart-btn"}>Add to Cart</Button>
        )}
      </div>
    </article>
  );
}

export default Card;
