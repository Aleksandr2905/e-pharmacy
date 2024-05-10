import * as s from "./Button.styled";

const Button = ({ name, type, text, to, onClick }) => {
  let BtnComponent;

  switch (name) {
    case "loginLink":
      BtnComponent = (
        <s.LinkLogin to={to} onClick={onClick} aria-label={name}>
          {text}
        </s.LinkLogin>
      );
      break;

    case "registerLink" || "logoutLink":
      BtnComponent = (
        <s.LinkRegister to={to} onClick={onClick} aria-label={name}>
          {text}
        </s.LinkRegister>
      );
      break;

    case "buttonMain":
      BtnComponent = (
        <s.ButtonMain type={type} onClick={onClick} aria-label={name}>
          {text}
        </s.ButtonMain>
      );
      break;

    case "buttonCard":
      BtnComponent = (
        <s.ButtonCard to={to} onClick={onClick} aria-label={name}>
          {text}
        </s.ButtonCard>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

export default Button;
