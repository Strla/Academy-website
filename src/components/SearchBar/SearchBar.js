import React from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyle";

const SearchBar = ({ placeholder, isDisabled, callback }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder={placeholder} disabled={!isDisabled} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
