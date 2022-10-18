import React, { useContext, useRef, useState } from "react";
import classes from "./Delivery.module.css";
import CartContext from "../../store/cart-cotext";

const isEmpty = (value) => value.trim().length === 0;
const isTenChars = (value) => value.trim().length === 10;

const Delivery = (props) => {
  const cartCtx = useContext(CartContext);

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    mobile: true,
    creditCard: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const mobileInputRef = useRef();
  const creditCardInputRef = useRef();

  const orderHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCreditCard = creditCardInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredMobileIsValid = isTenChars(enteredMobile);
    const enteredCreditCardIsValid = isTenChars(enteredCreditCard); //validation for credit card number is assuming to be 10 chars

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      mobile: enteredMobileIsValid,
      creditCard: enteredCreditCardIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredMobileIsValid &&
      enteredCreditCardIsValid;

    if (!formIsValid) {
      return;
    }
    props.setOrderSentProgress(true);
    fetch(
      "https://papa-gino-707f8-default-rtdb.firebaseio.com/DeliveryOrders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: {
            name: enteredName,
            address: enteredAddress,
            mobile: enteredMobile,
            creditCard: enteredCreditCard,
          },
          orderedItems: cartCtx.items,
        }),
      }
    );
    if(formIsValid && setTimeout(() => {
      props.setOrderSentProgress(false);
      props.setOrderIsSubmited(true);
    }, 3000));
    cartCtx.clearCart();
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div className={classes["input"]}>
          <label htmlFor="name">Your Name</label>
          <br></br>
          <input type="text" id="name" ref={nameInputRef}></input>
          {!formInputsValidity.name && <p>Please entered a valid name.</p>}
        </div>
        <div className={classes["input"]}>
          <label htmlFor="address">Address</label>
          <br></br>
          <input type="text" id="address" ref={addressInputRef}></input>
          {!formInputsValidity.address && (
            <p>Please entered a valid address.</p>
          )}
        </div>
        <div className={classes["input"]}>
          <label htmlFor="phone-number">Mobile</label>
          <br></br>
          <input type="" id="phone-number" ref={mobileInputRef}></input>
          {!formInputsValidity.mobile && (
            <p>Please entered a valid mobile Phone Number.</p>
          )}
        </div>
        <div className={classes["input"]}>
          <label htmlFor="credit-card">Credit Card</label>
          <br></br>
          <input type="" id="credit-card" ref={creditCardInputRef}></input>
          {!formInputsValidity.creditCard && (
            <p>Please entered a valid Credit Card.</p>
          )}
        </div>
        <span className={classes["total-amount"]}>
          Total Amount: {cartCtx.totalAmount}$
        </span>
      </form>
      <div className={classes["order-btn"]} onClick={orderHandler}>
        Order
      </div>
    </div>
  );
};

export default Delivery;
