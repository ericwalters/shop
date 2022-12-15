import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { CartItem } from "./cart-item";

test("renders remove from cart button", () => {
  render(
    <Provider store={store}>
      <CartItem label="my item" price="99" quantity="1"></CartItem>
    </Provider>
  );

  expect(
    screen.getByTestId("cart-item--remove-from-cart-button")
  ).toBeInTheDocument();
});
