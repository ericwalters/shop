import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { ProductItem } from "./product-item";

test("renders add to cart button", () => {
  render(
    <Provider store={store}>
      <ProductItem label="my item" price="99"></ProductItem>
    </Provider>
  );

  expect(
    screen.getByTestId("product-item--add-to-cart-button")
  ).toBeInTheDocument();
});
