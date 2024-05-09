import Logo from "../Logo/Logo";
import * as s from "./WrapperSignIn.styled";

const WrapperSignIn = ({ children }) => {
  return (
    <s.Container>
      <Logo />
      <s.Wrapper>
        <s.Title>
          Your medication, delivered Say goodbye to all{" "}
          <span>your healthcare</span> worries with us
        </s.Title>
        {children}
      </s.Wrapper>
    </s.Container>
  );
};

export default WrapperSignIn;
