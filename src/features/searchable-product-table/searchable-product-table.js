import React, { useState } from "react";
import { SearchBox } from "../search-box/search-box";
import { ProductTable } from "../product-table/product-table";
import styles from "./searchable-product-table.module.css";

// todo: maybe fake out an async call here?
const products = [
  { id: "item-1", label: "chair", price: "$5", description: "you sit on it" },
  {
    id: "item-2",
    label: "bike",
    price: "$10",
    description: "for riding down the street",
  },
  {
    id: "item-3",
    label: "keyboard",
    price: "$100",
    description: "for typing on",
  },
  { id: "item-4", label: "laptop", price: "$1000", description: "for coding" },
  { id: "item-5", label: "desktop", price: "$2000", description: "for gaming" },
  {
    id: "item-6",
    label: "television",
    price: "$2000",
    description: "for watching",
  },
];

export function SearchableProductTable() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.wrapper}>
      <SearchBox
        setSearchText={setSearchText}
        searchText={searchText}
      ></SearchBox>
      <ProductTable searchText={searchText} products={products}></ProductTable>
    </div>
  );
}
