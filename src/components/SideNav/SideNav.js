import React from "react";
import { SideNavLink, SideNavList } from "./SideNavStyle";

const SideNav = ({ open, isSecondary }) => {
  return (
    <SideNavList open={open} isSecondary={isSecondary}>
      <SideNavLink to="/courses">Courses</SideNavLink>
      <SideNavLink to="/">Sign in</SideNavLink>
      <SideNavLink to="/">Register</SideNavLink>
    </SideNavList>
  );
};

export default SideNav;
