import React from "react";
import "./Menu.css";
import Card from "./Card";
import Button from "./Button";
import { useGlobalContext } from "../Context";

function Menu(props) {
  const { cartItems, category } = useGlobalContext();

  return (
    <div className="section-center">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {category.map((btn, idx) => {
          return (
            <Button
              key={idx}
              className={"category-btn"}
              data={"category"}
              category={btn}
            >
              {btn}
            </Button>
          );
        })}
      </div>

      <div className="menu">
        {cartItems.map((cart) => {
          return <Card key={cart.id} cart={cart}></Card>;
        })}
      </div>
    </div>
  );
}

export default Menu;
