import React from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyle";

const SearchBar = ({ placeholder, isDisabled, callback }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder={placeholder} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
