import React, { useState } from "react";
import LogoImage from "../../assets/images/logo.svg";
import { Button } from "../../lib/style/generalStyles";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoImg,
  LogoLink,
  HeaderNavLink,
  ButtonLink,
  Nav,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({ isSecondary }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoImg src={LogoImage} alt="Academy logo" />
        </LogoLink>
        <Hamburger
          open={hamburgerOpen}
          isSecondary={isSecondary}
          onClick={toggleHamburgerOpen}
        />
        <Nav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          <HeaderNavLink to="/profile">Profile</HeaderNavLink>
          <ButtonLink to="/sign-in">
            <Button isNav={true}>Sign in</Button>
          </ButtonLink>
          <ButtonLink to="/register">
            <Button isSecondary={true} isNav={true}>
              Register
            </Button>
          </ButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
