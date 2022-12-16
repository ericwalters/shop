import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./header.module.css";
import { cartCount, toggleVisibility } from "../cart/cartSlice";

export function Header() {
  const count = useSelector(cartCount);
  const dispatch = useDispatch();
  return (
    <header>
      <div data-testid="header--title" className={styles.title}>
        BuyMyStuff.com
      </div>
      <div className={styles.cartCount}>{count}</div>
      {
        //todo: refactor styles to not use float
      }
      <button
        className={styles.openCart}
        onClick={() => {
          dispatch(toggleVisibility());
        }}
      >
        Open Cart
      </button>
    </header>
  );
}
