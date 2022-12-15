import React from "react";
import { useSelector } from "react-redux";
import styles from "./cart.module.css";
import { CartItem } from "../cart-item/cart-item";

function cartItems(items) {
  return items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      label={item.label}
      price={item.price}
      quantity={item.quantity}
    ></CartItem>
  ));
}

export function Cart() {
  const items = useSelector((state) => state.cart.cartItems);
  return <ul className={styles.wrapper}>{cartItems(items)}</ul>;
}
