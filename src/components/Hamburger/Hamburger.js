import React from "react";
import SideNav from "../SideNav/SideNav";
import { BurgerRow, StyledBurger } from "./HamburgerStyle";

const Hamburger = ({ open, onClick, isSecondary }) => {
  return (
    <>
      <StyledBurger onClick={onClick} open={open}>
        <BurgerRow open={open} />
        <BurgerRow open={open} />
        <BurgerRow open={open} />
      </StyledBurger>
      <SideNav open={open} isSecondary={isSecondary} />
    </>
  );
};

export default Hamburger;
