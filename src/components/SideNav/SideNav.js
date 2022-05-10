import React from "react";
import { SideNavLink, SideNavList } from "./SideNavStyle";

const SideNav = ({ open, isSecondary }) => {
  return (
    <SideNavList open={open} isSecondary={isSecondary}>
      <SideNavLink to="/courses">Courses</SideNavLink>
      <SideNavLink to="/profile">Profile</SideNavLink>
      <SideNavLink to="/sign-in">Sign in</SideNavLink>
      <SideNavLink to="/register">Register</SideNavLink>
    </SideNavList>
  );
};

export default SideNav;
