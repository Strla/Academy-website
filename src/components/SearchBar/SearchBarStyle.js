import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchBarInput = styled.input`
  padding: 0px 15px;
  margin-bottom: 40px;
  width: 100%;
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  line-height: 40px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
