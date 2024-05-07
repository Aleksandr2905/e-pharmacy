import * as s from "./Footer.styled";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNavMenu from "./FooterNavMenu/FooterNavMenu";

const Footer = () => {
  return (
    <s.Wrapper>
      <FooterLogo />
      <s.Text>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </s.Text>
      <FooterNavMenu />
      <FooterBottom />
    </s.Wrapper>
  );
};

export default Footer;
