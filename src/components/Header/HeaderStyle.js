import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { breakpoints, colors } from "../../lib/style/theme";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  @media (${breakpoints.desktop}) {
    padding: 32px 0;
  }

  ${(props) =>
    props.isSecondary &&
    `
      position: initial;
      background-color: ${colors.textPrimary};
  `}
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 140px;
`;

export const Nav = styled.nav`
  display: none;

  @media (${breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  color: ${colors.secondary};
  letter-spacing: 1px;
  margin-right: 48px;
  transition: text-shadow 0.3s ease-out;

  &::after {
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: -6px;
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

  &.active {
    &::after {
      opacity: 0;
    }
    padding-bottom: 4px;
    border-bottom: 2px solid white;
  }
`;

export const ButtonLink = styled(Link)`
  margin-right: 24px;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }
`;
