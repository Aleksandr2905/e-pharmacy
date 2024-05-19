import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 100vh;
  padding-top: calc((100vh / 2) - 142px);
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    width: 334px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 31px;
  right: 20px;
  border: none;
  padding: 0;
  background-color: transparent;

  & svg {
    stroke: ${({ theme }) => theme.color.white};
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }

  @media screen and (min-width: 768px) {
    top: 39px;
    right: 32px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  margin-bottom: 60px;
`;
