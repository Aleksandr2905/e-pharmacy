import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 100vh;
  padding-top: 50%;
  /* position: relative; */
  position: fixed;
  top: 0;
  right: 0;
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

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2px;

  & > :nth-child(2) {
    width: 134px;
  }
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 46px;
  border-radius: 60px;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  line-height: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1.5px solid ${({ theme }) => theme.color.promoBorder};
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
  }

  &.active {
    border: 8px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
  }

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 0.35em;
    border-left: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    border-right: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    background-color: ${({ theme }) => theme.color.white};
    top: 3.18em;
    right: 47.5%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 0.35em;
    border-left: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    border-right: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    background-color: ${({ theme }) => theme.color.white};
    bottom: 3.18em;
    right: 47.5%;
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
