import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 335px;
  padding: 32px 32px 40px;
  border-radius: 27px;
  /* border: 1.155px solid ${({ theme }) => theme.color.promoBorder}; */
  background-color: ${({ theme }) => theme.color.bgCardStore};
`;
