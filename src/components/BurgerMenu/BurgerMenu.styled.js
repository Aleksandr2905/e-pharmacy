import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 210px;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.color.green};
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
`;

export const IconNav = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  top: 35%;
  left: 17%;
  /* height: 100%; */
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 36%;
  left: 21%;
  gap: 18px;
`;

export const NavBtn = styled(NavLink)`
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    padding: 8px 12px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.color.green};
  }

  &.active {
    color: ${({ theme }) => theme.color.white};
    padding: 8px 12px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.color.green};
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
