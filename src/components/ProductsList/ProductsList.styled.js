import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 13px;
    margin-bottom: 80px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 335px;

  @media screen and (min-width: 768px) {
    min-width: 226px;
  }
`;
