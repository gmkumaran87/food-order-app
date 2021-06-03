import React from "react";
import "./Menu.css";
import Card from "./Card";
import { useGlobalContext } from "../Context";

function Menu(props) {
  const { cartItems } = useGlobalContext();
  console.log(`state`, cartItems);
  return (
    <div className="section-center">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
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
