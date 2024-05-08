import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  gap: 8px;
  max-width: 335px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 8px;
`;

export const Text = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.color.black};
`;
