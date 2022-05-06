import React from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyle";

const SearchBar = ({ placeholder, isDisabled, onValueChange }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        placeholder={placeholder}
        disabled={!isDisabled}
        onChange={onValueChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
