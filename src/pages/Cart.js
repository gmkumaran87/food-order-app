import React from "react";
import "./Cart.css";
import { useGlobalContext } from "../Context";
import CartItems from "./CartItems";
import Button from "./../components/Button";
import { Link } from "react-router-dom";

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

          <div className="cart-btn-container">
            <Link to="/food-order-app/">
              <Button className="router-btn" data="router">
                Back to Menu
              </Button>
            </Link>
            <Button className="router-btn order-btn" data="router">
              Order now
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Cart;
