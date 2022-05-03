import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { breakpoints, colors } from "../../lib/style/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  ${(props) =>
    props.isSecondary &&
    `
      position: initial;
      background-color: ${colors.textPrimary};
  `}

  @media (${breakpoints.desktop}) {
    padding: 32px 0;
  }
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

export const LogoImg = styled.img`
  width: 140px;
`;

export const Hamburger = styled(HamburgerIcon)`
  width: 30px;
  height: auto;

  path {
    fill: ${colors.secondary};
  }

  @media (${breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoLink = styled(Link)``;

export const Nav = styled.nav`
  display: none;

  @media (${breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: ${colors.secondary};
  letter-spacing: 1px;
  margin-right: 48px;
  transition: text-shadow 0.3s ease-out;

  :hover {
    text-shadow: 0.7px 0 0 ${colors.secondary};
  }

  &.active {
    padding-bottom: 3px;
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
