import React from "react";
import "./App.css";
import { SearchableProductTable } from "./features/searchable-product-table/searchable-product-table";
import { Header } from "./features/header/header";
import { Cart } from "./features/cart/cart";

function App() {
  //todo: refactor to use flexbox
  return (
    <div>
      <Header></Header>
      <SearchableProductTable></SearchableProductTable>
      <Cart></Cart>
    </div>
  );
}

export default App;
