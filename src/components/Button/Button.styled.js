import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkLogin = styled(Link)`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.color.promoBorder};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.buttonBorder};
  }
`;

export const LinkRegister = styled(Link)`
  display: flex;
  padding: 13px 32px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  background-color: transparent;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  color: ${({ theme }) => theme.color.promoBorder};

  &:hover {
    background-color: ${({ theme }) => theme.color.promoBorder};
    color: ${({ theme }) => theme.color.green};
  }
`;

export const ButtonMain = styled.button`
  display: flex;
  padding: 13px 13px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;
