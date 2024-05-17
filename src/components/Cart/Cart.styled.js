import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};
`;
