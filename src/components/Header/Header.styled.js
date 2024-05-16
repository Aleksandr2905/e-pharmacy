import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px;
  background-color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.green : "transparent"};
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
