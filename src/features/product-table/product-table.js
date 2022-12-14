import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./product-table.module.css";
import { ProductItem } from "../product-item/product-item";

const productList = (props) => {
  if (!props.searchText) {
    return props.products.map((product) => {
      return <ProductItem key={product.id} label={product.label}></ProductItem>;
    });
  }
  const filteredProducts = [];
  props.products.forEach((product) => {
    if (product.label.includes(props.searchText)) {
      filteredProducts.push(
        <ProductItem key={product.id} label={product.label}></ProductItem>
      );
    }
  });
  return filteredProducts;
};

export function ProductTable(props) {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.wrapper}>
      <ul>{productList(props)}</ul>
    </div>
  );
}
