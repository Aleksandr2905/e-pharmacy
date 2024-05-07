import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  gap: 32px;
  margin-bottom: 80px;
`;

export const Button = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.lightGrey};

  &:hover {
    color: ${({ theme }) => theme.color.lightGrey30};
  }
`;
