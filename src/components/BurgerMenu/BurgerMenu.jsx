import { useDispatch } from "react-redux";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerMenu.styled";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "../Header/Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleCloseBurgerMenu = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  useEffect(() => {
    if (desktop) {
      handleCloseBurgerMenu();
    }
  }, [desktop]);

  return (
    <>
      <s.Wrapper>
        <s.CloseBtn type="button" onClick={handleCloseBurgerMenu}>
          <svg width={32} height={32}>
            <use href={`${sprite}#close`} />
          </svg>
        </s.CloseBtn>
        <div>
          <Navigation />
        </div>
        <s.WrapperBtn>
          <AuthButton handleCloseBurgerMenu={handleCloseBurgerMenu} />
        </s.WrapperBtn>
      </s.Wrapper>
    </>
  );
};

export default BurgerMenu;
