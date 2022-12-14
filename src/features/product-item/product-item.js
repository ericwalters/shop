import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./product-item.module.css";
import { SearchBox } from "../search-box/search-box";
import { Button } from "../button/button";

export function ProductItem(props) {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

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
          <label>Add to Cart</label>
        </li>
      </ul>
      <Button></Button>
    </li>
  );
}
