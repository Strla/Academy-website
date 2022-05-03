import "./Header.scss";
import LogoImage from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoImg,
  Hamburger,
  LogoLink,
  HeaderNavLink,
  ButtonLink,
  Nav,
} from "./HeaderStyle";

const Header = ({ isSecondary }) => {
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoImg src={LogoImage} alt="Academy logo" />
        </LogoLink>

        <Hamburger />

        <Nav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          <ButtonLink to="/">
            <Button modifiers={["nav"]}>Sign in</Button>
          </ButtonLink>
          <ButtonLink to="/">
            <Button modifiers={["nav", "secondary"]}>Register</Button>
          </ButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
