import React from "react";
import { useDispatch } from "react-redux";
import styles from "./product-item.module.css";
import { add } from "../cart/cartSlice";
import { ProductAdapter } from "../../models/product-adapter";
import { ProductModel } from "../../models/product-model";

export function ProductItem(props) {
  const dispatch = useDispatch();

  return (
    <li className={styles.wrapper}>
      <ul>
        <li>
          <label>{props.label}</label>
        </li>
        <li>
          <label>{props.price}</label>
        </li>
        <li>
          <button
            className={styles.button}
            data-testid="product-item--add-to-cart-button"
            onClick={() => {
              dispatch(
                add(new ProductAdapter(new ProductModel(props)).serialize())
              );
            }}
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </li>
  );
}
