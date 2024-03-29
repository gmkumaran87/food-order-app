import React from "react";
import "./Navigation.css";
import Button from "./Button";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

function Navigation() {
  const { totalItems } = useGlobalContext();
  return (
    <nav className="nav-bar">
      <Link to="/food-order-app/">
        <h2>Food App</h2>
      </Link>

      <ul className="links">
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/food-order-app/">Menu</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <Link to="/cart">
        <Button className={"nav-btn"} data={"nav"}>
          <span className="cart-icon">
            <svg
              data-id="nav"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
          </span>
          <span data-id="nav" className="nav-msg">
            Your Cart
          </span>
          <span data-id="nav" className="item-cnt">
            {totalItems}
          </span>
        </Button>
      </Link>
    </nav>
  );
}

export default Navigation;
