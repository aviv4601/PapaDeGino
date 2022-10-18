import { Card, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  DeliveryClientInfo,
  PickupClientInfo,
} from "../components/OrdersList/ClientInfo";
import classes from "./Orders.module.css";
import ItemsPerOrder from "../components/OrdersList/ItemsPerOrder";
import SelectButton from "../components/OrdersList/SelectButton";

const Orders = () => {
  const [Deliveryorders, setDeliveryOrders] = useState([]);
  const [Pickuporders, setPickupOrders] = useState([]);
  const [showExtendedOrder, setShowExtendedOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [typeOfOrders, setTypeOfOrders] = useState("Delivery");

  const onShowExtendedOrderHandler = (index) => () => {
    setShowExtendedOrder((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  useEffect(() => {
    const fetchOrders = async () => {
      if (typeOfOrders === "Delivery") {
        const response = await fetch(
          "https://papa-gino-707f8-default-rtdb.firebaseio.com/DeliveryOrders.json"
        );
        const responseData = await response.json();
        const deliveryLoadedOrders = getDeliveryOrders(responseData);
        setDeliveryOrders(deliveryLoadedOrders);
      } else {
        console.log("changed");
        const response = await fetch(
          "https://papa-gino-707f8-default-rtdb.firebaseio.com/PickupOrders.json"
        );
        const responseData = await response.json();
        const pickupLoadedOrders = getPickupOrders(responseData);
        setPickupOrders(pickupLoadedOrders);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); //Used timeout because the loading process is too quick
    };
    fetchOrders();
  }, [typeOfOrders]);

  let clientList = "";
  let itemsListPerOrder ='';

  if (typeOfOrders === "Delivery") {
    clientList = Deliveryorders.map((client) => (
      <DeliveryClientInfo
        orderId={client.id}
        name={client.userData.name}
        address={client.userData.address}
        mobile={client.userData.mobile}
        creditCard={client.userData.creditCard}
      ></DeliveryClientInfo>
    ));
    itemsListPerOrder = Deliveryorders.map((client) =>
    client.orderedItems.map((item) => (
      <ItemsPerOrder
        amount={item.amount}
        name={item.name}
        price={item.price}
      ></ItemsPerOrder>
    ))
  );
  } else {
    clientList = Pickuporders.map((client) => (
      <PickupClientInfo
        orderId={client.id}
        name={client.userName}
        date={client.pickupDate}
      ></PickupClientInfo>
    ));
    itemsListPerOrder = Pickuporders.map((client) =>
    client.orderedItems.map((item) => (
      <ItemsPerOrder
        amount={item.amount}
        name={item.name}
        price={item.price}
      ></ItemsPerOrder>
    ))
  );
  }
   

  if (isLoading) {
    return <LinearProgress color="success"></LinearProgress>;
  }

  return (
    <React.Fragment>
      <SelectButton
        setTypeOfOrders={setTypeOfOrders}
        typeOfOrders={typeOfOrders}
      ></SelectButton>
      <div className={classes.orders}>
        {clientList.map((client, index) => (
          <div
            className={classes.order}
            key={client.id}
            onClick={onShowExtendedOrderHandler(index)}
          >
            <Card>
              <ul>{client}</ul>
            </Card>
            {showExtendedOrder[index] ? (
              <ul>{itemsListPerOrder[index]}</ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Orders;

export function getDeliveryOrders(data) {
  const loadedOrders = [];
  for (const key in data) {
    loadedOrders.push({
      id: key,
      userData: {
        name: data[key].user.name,
        address: data[key].user.address,
        mobile: data[key].user.mobile,
        creditCard: data[key].user.creditCard,
      },
      orderedItems: data[key].orderedItems,
    });
  }
  return loadedOrders;
}

export function getPickupOrders(data) {
  const loadedOrders = [];
  for (const key in data) {
    loadedOrders.push({
      id: key,
      userName: data[key].name,
      pickupDate: data[key].date,
      orderedItems: data[key].orderedItems,
    });
  }
  return loadedOrders;
}
