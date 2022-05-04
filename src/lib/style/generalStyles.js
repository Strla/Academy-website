import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  border: none;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 220px;
  background-color: ${colors.bgPrimary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease-in-out;
  font-family: ${fonts.primary};

  &:hover {
    box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  ${(props) =>
    props.isSecondary &&
    `
    background-color: ${colors.primary};
    color: ${colors.secondary};
  `}

  ${(props) =>
    props.isNav &&
    `
    width: 150px;
  `}

  ${(props) =>
    props.isHeading &&
    `
     width: 200px;
  `}

   ${(props) =>
    props.isOutline &&
    `
     border: 1px solid ${colors.primary};
  `}
`;

export const Main = styled.main``;
