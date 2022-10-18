import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectButton = (props) => {
  const onChangeTypeHandler = (event) => {
    console.log(event.target.value);
    props.setTypeOfOrders(event.target.value);
  };
  return (
    <div
      style={{
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        borderColor: "white",
      }}
    >
      <FormControl
        style={{
          color: "black",
          backgroundColor: "white",
          borderColor: "black",
        }}
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      >
        <InputLabel style={{ paddingTop: "9px" }}>
          {props.typeOfOrders}
        </InputLabel>
        <Select
          value={props.typeOfOrders}
          label={props.typeOfOrders}
          onChange={onChangeTypeHandler}
          style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}
        >
          {props.typeOfOrders !== "Delivery" ? (
            <MenuItem value={"Delivery"}>Delivery</MenuItem>
          ) : (
            <MenuItem value={"Pickup"}>Pickup</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
