import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchBox } from "../search-box/search-box";
import { ProductTable } from "../product-table/product-table";

const products = [
  { id: "item-1", label: "item 1", price: "$5" },
  { id: "item-2", label: "item 2", price: "$10" },
  { id: "item-3", label: "item 3", price: "$100" },
];

export function SearchableProductTable() {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <SearchBox
        setSearchText={setSearchText}
        searchText={searchText}
      ></SearchBox>
      <ProductTable searchText={searchText} products={products}></ProductTable>
    </div>
  );
}
