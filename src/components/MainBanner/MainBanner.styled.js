import styled from "styled-components";
import heroMob from "../../assets/images/mobile/heroMob@1x.png";
import heroMob2x from "../../assets/images/mobile/heroMob@2x.png";
import { Container } from "../../styles/GlobalStyles";

export const Section = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 730px;
  background-color: ${({ theme }) => theme.color.green};
`;

export const Wrapper = styled.div`
  max-width: 331px;
  height: 312px;
  margin: auto 0;
  background-image: url(${heroMob});
  background-size: 100% 100%;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMob2x});
  }
`;

export const Title = styled.h1`
  padding-top: 19px;
  text-shadow: 0px 4px 85px rgba(29, 30, 33, 0.3);
  font-size: 50px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.color.white};
`;

export const Text = styled.p`
  width: 156px;
  margin-left: auto;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: ${({ theme }) => theme.color.white};
`;
