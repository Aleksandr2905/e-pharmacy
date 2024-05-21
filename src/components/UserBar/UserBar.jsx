import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUsername } from "../../redux/auth/selectors";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./UserBar.styled";
import { selectCart } from "../../redux/pharmacy/selectors";

const UserBar = ({ $isHomePage }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cart = useSelector(selectCart);
  const name = useSelector(selectUsername);
  const quantity = cart?.cartProducts?.length || 0;

  return isLoggedIn ? (
    <s.Wrapper>
      <s.Cart to="/cart">
        <svg width={16} height={16}>
          <use href={`${sprite}#cart`} />
        </svg>
        <s.Quantity $isHomePage={$isHomePage}>{quantity}</s.Quantity>
      </s.Cart>
      <s.User $isHomePage={$isHomePage}>
        <p>{name.username[0]}</p>
      </s.User>
    </s.Wrapper>
  ) : null;
};

export default UserBar;
