import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 40px;
  padding: 20px;
  gap: 19px;
  background-color: ${({ theme }) => theme.color.green};
`;

export const Title = styled.h2`
  max-width: 288px;
  margin: 20px 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.color.promoBorder};
`;

export const Text = styled.p`
  max-width: 291px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.promoBorder};
`;

export const Button = styled(Link)`
  display: flex;
  margin-bottom: 20px;
  padding: 13px 32px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.promoBorder};
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;
