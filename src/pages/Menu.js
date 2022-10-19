import { LinearProgress } from "@mui/material";
import React, { useState,useEffect } from "react";
import Checkout from "../components/Cart/Checkout";
import Meals from "../components/Meals/Meals";
import OrderWindow from "../components/OrderManagement/OrderWindow";
import CartProvider from "../Store/CartProvider";
import classes from "./Menu.module.css";

const Menu = ({ children }) => {
  const [orderWindowIsShown, setOrderWindowIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://papa-gino-707f8-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, );
  
  const showOrderWindowHandler = () => {
    setOrderWindowIsShown(true);
  };

  const hideOrderWindowHandler = () => {
    setOrderWindowIsShown(false);
  };

  return (
    <CartProvider>
      {isLoading ? (
        <LinearProgress color="success"></LinearProgress>
      ) : (
        <div>
          {orderWindowIsShown && (
            <OrderWindow
              onHideOrderWindow={hideOrderWindowHandler}
            ></OrderWindow>
          )}
          <div className={classes.container}>
            <div className={classes.meals}>
              <Meals meals={meals}></Meals>
            </div>
            <div className={classes.checkout}>
              <Checkout onShowOrderWindow={showOrderWindowHandler}></Checkout>
            </div>
          </div>
        </div>
      )}
    </CartProvider>
  );
};

export default Menu;
