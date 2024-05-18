import styled from "styled-components";

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 335px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 32px;
  }
`;

export const BtnBlock = styled.div`
  /* display: flex; */
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
`;
