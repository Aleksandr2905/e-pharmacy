import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  color: ${({ theme }) => theme.color.white};
`;
