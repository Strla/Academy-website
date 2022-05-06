import styled from "styled-components";
import { breakpoints } from "../../lib/style/theme";

export const SearchBarWrapper = styled.div`
  margin-bottom: 40px;
  width: 400px;
  display: inline-flex;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  position: relative;
  border: 2px solid lightgrey;
  border-radius: 6px;
  line-height: 40px;
  outline: none;
  font-size: 14px;
  z-index: -1;

  &:focus {
    border-color: yellow;
  }

  @media (min-width: 576px) {
    padding: 0;
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
