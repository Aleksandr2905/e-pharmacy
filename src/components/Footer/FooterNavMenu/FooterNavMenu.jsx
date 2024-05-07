import { navMenu } from "../../../data/navMenu";
import * as s from "./FooterNavMenu.styled";

const FooterNavMenu = () => {
  return (
    <s.Wrapper>
      {navMenu.map((item) => (
        <s.Button key={item.text} to={`${item.to}`}>
          {item.text}
        </s.Button>
      ))}
    </s.Wrapper>
  );
};

export default FooterNavMenu;
