import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./product-table.module.css";
import { SearchBox } from "./search-box";
import { Button } from "./button";

export function ProductItem() {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <li className={styles.wrapper}>
      <label>Item Description</label>
      <label>Price</label>
      <label>Add to Cart</label>
      <Button></Button>
    </li>
  );
}
