import React from "react";
import "./Card.css";

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
        <div className="add-cart">
          <div className="decrease">
            <img src="./images/minus.png" alt="" />
          </div>
          <span className="cart-qty">1</span>
          <div className="increase">
            {" "}
            <img src="./images/add.png" alt="" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
