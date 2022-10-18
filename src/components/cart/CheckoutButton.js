import React, { useContext } from "react";
import classes from "./CheckoutButton.module.css";
import CartContext from "../../store/cart-cotext";

const CheckoutButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartTotalAmount = `$${+cartCtx.totalAmount.toFixed(2)}`;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    // console.log(cartCtx.items);
    return curNumber + item.amount;
  }, 0);

  const hasItems = cartCtx.items.length > 0;

  const btnClasses = !hasItems
    ? `${classes["empty-cart"]}`
    : `${classes["checkout-btn"]}`;
  const priceClasses = !hasItems
    ? `${classes["zero-price"]}`
    : `${classes["checkout-price"]}`;

  return (
    <button
      className={btnClasses}
      onClick={props.onShowOrderWindow}
    >
      <div className={classes["bottom-text"]}>
        <p>Checkout</p>
        <span className={priceClasses}>{cartTotalAmount}</span>
      </div>
      <span className={classes["num-of-items"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default CheckoutButton;
