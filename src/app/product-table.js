import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./product-table.module.css";
import { SearchBox } from "./search-box";
import { ProductItem } from "./product-item";

const staticItems = [
  { id: "item-1", label: "item 1" },
  { id: "item-1", label: "item 2" },
  { id: "item-1", label: "item 3" },
];

const productList = () => {
  return staticItems.map((item) => {
    return <ProductItem key={item.id}>{item.label}</ProductItem>;
  });
};

export function ProductTable() {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.wrapper}>
      <SearchBox></SearchBox>
      <ul>{productList()}</ul>
    </div>
  );
}
