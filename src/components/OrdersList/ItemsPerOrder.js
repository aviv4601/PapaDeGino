import React from "react";

const ItemsPerOrder = (props) => {
  return (
    <div>
      <h4 style={{ color: "white" }}>Item: {`X${props.amount}`} {props.name}</h4>
      <span style={{ color: "white" ,fontSize:'13px'}}>
        Price: {props.price * props.amount}
      </span>
    </div>
  );
};

export default ItemsPerOrder;
