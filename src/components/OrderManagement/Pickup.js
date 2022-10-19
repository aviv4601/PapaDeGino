import React, { useState, useRef, useContext } from "react";
import classes from "./Pickup.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Calendar from "./Calendar";
import CartContext from "../../Store/cart-cotext";

const isEmpty = (value) => value.trim().length === 0;

var date = new Date();
const currDateAndTime = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const Pickup = (props) => {
  const [isShownCalendar, setIsShownCalendar] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    datePicked: true,
  });
  const [calendarValue, setCalendarValue] = useState(currDateAndTime);

  const nameInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const onShownCalenderHandler = () => {
    setIsShownCalendar(!isShownCalendar);
  };

  const orderHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);

    setFormInputsValidity({
      name: enteredNameIsValid,
      datePicked: true,
    });

    if (!enteredNameIsValid) {
      return;
    }

    props.setOrderSentProgress(true);
    fetch(
      "https://papa-gino-707f8-default-rtdb.firebaseio.com/PickupOrders.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          date: calendarValue,
          orderedItems: cartCtx.items,
        }),
      }
    );
    if (
      enteredNameIsValid &&
      setTimeout(() => {
        props.setOrderSentProgress(false);
        props.setOrderIsSubmited(true);
      }, 3000)
    );
    cartCtx.clearCart();
  };

  return (
    <div className={classes.container}>
      <p className={classes.headline}>Where</p>
      <div className={classes["pickup-attribute"]}>
        <RestaurantIcon className={classes.icon}></RestaurantIcon>
        <div className={classes["where-info"]}>
          <span>Gino's Pizza</span>
          <br></br>
          <span className={classes["address-info"]}>
            1753 5th ave,Brooklyn,NY,11220,US
          </span>
        </div>
      </div>
      <p className={classes.headline}>When</p>
      <div className={classes["pickup-attribute"]}>
        <AccessTimeIcon className={classes.icon}></AccessTimeIcon>
        <div className={classes["when-info"]}>
          {!isShownCalendar ? (
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "16px",
              }}
              onClick={onShownCalenderHandler}
            >
              Pick a time{" "}
            </span>
          ) : (
            <div>
              <form>
                <label style={{ fontWeight: "bolder" }} htmlFor="name">
                  Your Name
                </label>
                <br></br>
                <input type="text" id="name" ref={nameInputRef}></input>
                {!formInputsValidity.name && (
                  <p style={{ fontWeight: "bold" }}>
                    Please entered a valid name.
                  </p>
                )}
                <div className={classes["calendar"]}>
                  <Calendar
                    calendarValue={calendarValue}
                    setCalendarValue={setCalendarValue}
                  ></Calendar>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className={classes["order-btn"]} onClick={orderHandler}>
        Order
      </div>
    </div>
  );
};

export default Pickup;
