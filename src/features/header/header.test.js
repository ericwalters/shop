import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Header } from "./header";

test("renders the website title", () => {
  render(
    <Provider store={store}>
      <Header></Header>
    </Provider>
  );

  expect(screen.getByTestId("header--title")).toBeInTheDocument();
});
