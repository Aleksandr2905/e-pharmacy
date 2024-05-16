import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import * as s from "./Header.styled";
import BurgerButton from "../BurgerButton/BurgerButton";
import UserBar from "../UserBar/UserBar";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <s.Wrapper $isHomePage={pathname === "/"}>
      <Logo />
      <s.UserStatus>
        <UserBar $isHomePage={pathname === "/"} />
        <BurgerButton />
      </s.UserStatus>
    </s.Wrapper>
  );
};

export default Header;
