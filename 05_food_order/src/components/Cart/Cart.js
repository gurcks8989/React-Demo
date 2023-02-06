import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  const totalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;
  const hasItems = 0 < cartCxt.items.length;

  const carItemRemoveHandler = (id) => {
    cartCxt.removeItem(id) ;
  };

  const carItemAddHandler = (item) => {
    cartCxt.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={carItemRemoveHandler.bind(null, item.id)}
          onAdd={carItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
