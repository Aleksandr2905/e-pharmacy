import { useDispatch } from "react-redux";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerMenu.styled";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const handleCloseBurgerMenu = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };
  return (
    <>
      <s.Wrapper>
        <s.CloseBtn type="button" onClick={handleCloseBurgerMenu}>
          <svg width={32} height={32}>
            <use href={`${sprite}#close`} />
          </svg>
        </s.CloseBtn>
      </s.Wrapper>
    </>
  );
};

export default BurgerMenu;
