import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export const Text = styled.p`
  font-family: "SemiBold", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.white : theme.color.black};
`;
