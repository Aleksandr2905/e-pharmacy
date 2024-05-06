import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Wrapper } from "./Header.styled";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper $isHomePage={pathname === "/"}>
      <Logo />
      <BurgerButton />
    </Wrapper>
  );
};

export default Header;
