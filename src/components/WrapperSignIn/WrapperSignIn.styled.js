import styled from "styled-components";
import pill from "../../assets/images/pill@1x.png";
import elements from "../../assets/images/mobile/elements.png";

export const Container = styled.section`
  padding: 25px 20px;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -81px;
    right: -78px;
    width: 264px;
    height: 249px;
    background-image: url(${elements});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 335px;
  margin: 0 auto;
  height: 100%;
`;

export const Title = styled.h2`
  max-width: 335px;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.21;
  color: ${({ theme }) => theme.color.black};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -56px;
    right: 20px;
    width: 95px;
    height: 93px;
    background-image: url(${pill});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
  & span {
    color: ${({ theme }) => theme.color.green};
  }
`;
