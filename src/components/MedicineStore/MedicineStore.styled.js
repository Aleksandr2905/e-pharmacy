import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  text-align: start;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
