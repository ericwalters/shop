import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./search-box.module.css";

export function SearchBox() {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.wrapper}>
      <input type="search"></input>
    </div>
  );
}
