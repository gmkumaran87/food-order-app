import React from "react";
import "./Cart.css";
import { useGlobalContext } from "../Context";
import CartItems from "./CartItems";
import Button from "./../components/Button";

const Cart = () => {
  const { selectedItems, totalAmount } = useGlobalContext();

  //console.log(`selectedItems`, selectedItems);

  return (
    <>
      <header className="cart-header">
        <h1>Your Cart</h1>
      </header>
      <div className="cart">
        <div className="cartItems">
          {selectedItems.map((item) => {
            return <CartItems key={item.id} cart={item} />;
          })}
        </div>
        {/* Footer items */}
        <footer className="cart-footer">
          <div className="cart-total">
            <h4>Total</h4>
            <span>{totalAmount}</span>
          </div>
          <Button className="router-btn" data="router">
            Back to Menu
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Cart;
