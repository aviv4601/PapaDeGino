import React from "react";

export function DeliveryClientInfo(props) {
  const hiddenCreditCard = `****-**-${props.creditCard.slice(-4)}`;
  return (
    <li style={{ listStyle: "none" }}>
      <div>
        <h3 style={{ color: "black" }}>OrderID: {props.orderId}</h3>
        <div>Name: {props.name}</div>
        <div>Adrress: {props.address}</div>
        <div>Mobile: {props.mobile}</div>
        <div>NO. CC: {hiddenCreditCard}</div>
      </div>
    </li>
  );
}

export function PickupClientInfo(props) {
  return (
    <li style={{ listStyle: "none" }}>
      <div>
        <h3 style={{ color: "black" }}>OrderID: {props.orderId}</h3>
        <div>Name: {props.name}</div>
        <div>Date of Pickup: {props.date.slice(0,-5)}</div>
      </div>
    </li>
  );
}
