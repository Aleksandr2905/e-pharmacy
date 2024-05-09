import { useDispatch } from "react-redux";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerMenu.styled";
import { navMenu } from "../../data/navMenu";
import Button from "../Button/Button";

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
        <s.IconNav>
          <svg width={134} height={142}>
            <use href={`${sprite}#nav-burger`} />
          </svg>
        </s.IconNav>
        <div>
          <s.Navigation>
            {navMenu.map((item) => (
              <s.NavBtn
                key={item.text}
                to={`${item.to}`}
                onClick={handleCloseBurgerMenu}
              >
                {item.text}
              </s.NavBtn>
            ))}
          </s.Navigation>
        </div>
        <s.WrapperBtn>
          <Button
            to="/register"
            name="registerLink"
            text="Register"
            onClick={handleCloseBurgerMenu}
          />
          <Button
            to="/login"
            name="loginLink"
            text="Login"
            onClick={handleCloseBurgerMenu}
          />
        </s.WrapperBtn>
      </s.Wrapper>
    </>
  );
};

export default BurgerMenu;
