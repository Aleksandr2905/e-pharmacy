import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.green};
`;

export const Text = styled.p`
  max-width: 261px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.lightGrey};
`;
