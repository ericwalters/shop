import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./search-box.module.css";

function onSearchChange(props, e) {
  props.setSearchText(e.target.value);
}

export function SearchBox(props) {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        onChange={onSearchChange.bind(null, props)}
        value={props.searchText}
      ></input>
    </div>
  );
}
