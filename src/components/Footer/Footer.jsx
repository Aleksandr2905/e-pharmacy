import { useScreenWidth } from "../../hooks/useScreenWidth";
import * as s from "./Footer.styled";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNavMenu from "./FooterNavMenu/FooterNavMenu";
import Social from "./Social/Social";

const Footer = () => {
  const screen = useScreenWidth();

  return (
    <>
      <s.Wrapper>
        <s.FooterTop>
          <div>
            <FooterLogo />
            <s.Text>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </s.Text>
          </div>
          <div>
            <FooterNavMenu />
            <Social />
          </div>
        </s.FooterTop>
        <FooterBottom />
      </s.Wrapper>
    </>
  );
};

export default Footer;
