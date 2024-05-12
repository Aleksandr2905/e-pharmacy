import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Button.styled";

const Button = ({ name, type, text, to, onClick, reset }) => {
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
        <s.ButtonCard type={type} onClick={onClick} aria-label={name}>
          {text}
        </s.ButtonCard>
      );
      break;

    case "filter":
      BtnComponent = (
        <s.BtnFilter
          type={type}
          onClick={onClick}
          aria-label={name}
          $reset={reset}
        >
          {text === "Filter" && (
            <svg width={14} height={14}>
              <use href={`${sprite}#filter`} />
            </svg>
          )}
          {text}
        </s.BtnFilter>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

export default Button;
