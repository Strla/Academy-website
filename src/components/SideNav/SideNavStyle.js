import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

export const SideNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colors.overlaySecondary};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  padding-top: 3.5rem;

  ${(props) =>
    props.isSecondary &&
    `
      background-color: ${colors.overlayPrimary};
    `}

  @media (${breakpoints.desktop}) {
    display: none;
  }
`;

export const SideNavLink = styled(NavLink)`
  padding: 10px 10px;
  position: relative;
  color: ${colors.secondary};
  letter-spacing: 1px;
  margin-right: 48px;
  transition: text-shadow 0.3s ease-out;

  &::after {
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 2px;
    border-radius: 8px;
    content: "";
    height: 2px;
    width: 100%;
    background: ${colors.secondary};
    transition: opacity 0.3s ease-out;
  }

  :hover {
    &::after {
      opacity: 1;
    }
  }
`;
