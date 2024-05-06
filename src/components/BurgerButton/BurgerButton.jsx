import { useLocation } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerButton.styled";

const BurgerButton = () => {
  const { pathname } = useLocation();
  return (
    <s.Button type="button" $isHomePage={pathname === "/"}>
      <svg width={32} height={26}>
        <use href={`${sprite}#burger`} />
      </svg>
    </s.Button>
  );
};

export default BurgerButton;
