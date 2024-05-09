import styled from "styled-components";
import { Link } from "react-router-dom";

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & > :nth-child(5) {
    margin-top: 10px;
  }
`;

export const Btn = styled(Link)`
  text-align: center;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.linkBtn};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
