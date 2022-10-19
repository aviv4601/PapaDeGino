import React, { useContext } from "react";
import CartContext from "../../Store/cart-cotext";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const onAddHandler = item =>{
    cartCtx.addItem({...item,amount:1});
  };
  const onRemoveHandler = id =>{
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          description={item.description}
          price={item.price}
          onAdd={onAddHandler.bind(null,item)}//bind ensures that the function recieve the data respectively
          onRemove={onRemoveHandler.bind(null,item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return <ul>{cartItems}</ul>;
};

export default Cart;
