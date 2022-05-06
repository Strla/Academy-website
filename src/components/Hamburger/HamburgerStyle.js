import styled from "styled-components";
import { breakpoints } from "../../lib/style/theme";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  ${(props) =>
    props.open &&
    `
    position: fixed;
  `}

  @media (${breakpoints.desktop}) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const BurgerRow = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.2s linear;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
