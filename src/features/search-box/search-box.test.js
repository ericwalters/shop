import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { SearchBox } from "./search-box";

test("renders the searchbox", () => {
  const setSearchTextMock = jest.fn(() => {});
  render(
    <Provider store={store}>
      <SearchBox searchText="" setSearchText={setSearchTextMock}></SearchBox>
    </Provider>
  );

  expect(screen.getByTestId("searchbox--input")).toBeInTheDocument();
});
