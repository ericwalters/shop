import React from "react";
import styles from "./product-table.module.css";
import { ProductItem } from "../product-item/product-item";

const toProductItem = (product) => {
  return (
    <ProductItem
      key={product.id}
      id={product.id}
      label={product.label}
      price={product.price}
      description={product.description}
    ></ProductItem>
  );
};

const productList = (props) => {
  if (!props.searchText) {
    return props.products.map((product) => toProductItem(product));
  }
  const filteredProducts = [];
  props.products.forEach((product) => {
    if (product.label.includes(props.searchText)) {
      filteredProducts.push(toProductItem(product));
    }
  });
  return filteredProducts;
};

export function ProductTable(props) {
  return (
    <div className={styles.wrapper}>
      <ul>{productList(props)}</ul>
    </div>
  );
}
