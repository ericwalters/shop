import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../cart/cartSlice";
import styles from "./cart-item.module.css";

export function CartItem(props) {
  // todo: refactor to use product item instead
  const dispatch = useDispatch();
  return (
    <li className={styles.wrapper}>
      <ul>
        <li>
          <label>{props.label}</label>
        </li>
        <li>
          <label>{props.quantity}</label>
        </li>
        <li>
          <label>{props.price}</label>
        </li>
        <button
          className={styles.button}
          data-testid="cart-item--remove-from-cart-button"
          onClick={() => {
            dispatch(remove(props.id));
          }}
        >
          Remove from Cart
        </button>
      </ul>
    </li>
  );
}
