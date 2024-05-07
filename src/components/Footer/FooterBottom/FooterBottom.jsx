import * as s from "./FooterBottom.styled";

const FooterBottom = () => {
  return (
    <s.Wrapper>
      <s.Item>© E-Pharmacy 2023. All Rights Reserved</s.Item>
      <s.Item>
        <a href="#">Privacy Policy</a>
      </s.Item>
      <s.Item>
        <a href="#">Terms & Conditions</a>
      </s.Item>
    </s.Wrapper>
  );
};

export default FooterBottom;
