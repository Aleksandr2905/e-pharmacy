import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 335px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 16px;
  }
`;
