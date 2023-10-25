import React from "react"
import './cartWidget.css'
import itemCart from "../ItemCart";
import { Link } from "react-router-dom";
import Cart from "../Cart";




export const CartWidget =() => {
  return (
     <Link to="/cart" className="cart">
        <i className="bi bi-cart3"></i>
     </Link>
  );

}

export default CartWidget;

