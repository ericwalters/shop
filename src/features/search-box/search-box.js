import React from "react";
import styles from "./search-box.module.css";

function onSearchChange(props, e) {
  props.setSearchText(e.target.value);
}

export function SearchBox(props) {
  return (
    <div>
      <input
        type="search"
        data-testid="searchbox--input"
        onChange={onSearchChange.bind(null, props)}
        value={props.searchText}
      ></input>
    </div>
  );
}
