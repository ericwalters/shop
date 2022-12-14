import React from "react";
import { useSelector } from "react-redux";
import styles from "./header.module.css";
import { cartCount } from "../cart/cartSlice";

export function Header() {
  const count = useSelector(cartCount);
  return (
    //todo: refactor to use flexbox
    <header>
      <div className={styles.title}>BuyMyStuff.com</div>
      <div className={styles.cartCount}>{count}</div>
    </header>
  );
}
