// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useContext } from "react";
import CartContext from "../../Store/cart-cotext";
import classes from "./Checkout.module.css";
import CheckoutButton from "./CheckoutButton";
import Cart from "./Cart";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const submitOrderHandler = (userData) =>{

  };
  const hasItems = cartCtx.items.length > 0;
  return (
    <div className={classes["cart-info"]}>
      <span className={classes.title}>Your order</span>
      {!hasItems ? (
        <Fragment>
          <p>Your cart is empty. Select from the menu to start an order!</p>
        </Fragment>
      ) : (
        <Cart></Cart>
      )}
      <CheckoutButton onConfirm={submitOrderHandler} onShowOrderWindow={props.onShowOrderWindow}></CheckoutButton>
    </div>
  );
};

export default Checkout;
