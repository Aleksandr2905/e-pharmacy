import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Button from "../Button/Button";
import { logout } from "../../redux/auth/operations";

const AuthButton = ({ handleCloseBurgerMenu }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logout());
    handleCloseBurgerMenu();
  };

  return (
    <>
      {isLoggedIn ? (
        <Button
          type="button"
          name="logout"
          text="Log out"
          onClick={handleLogOut}
        />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default AuthButton;
