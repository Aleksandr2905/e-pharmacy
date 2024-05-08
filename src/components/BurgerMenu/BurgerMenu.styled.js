import styled from "styled-components";

export const Wrapper = styled.div`
  width: 185px;
  height: 100vh;
  padding: 16px;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  padding: 0;
  background-color: transparent;

  & svg {
    stroke: red;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-top: calc((50vh - 184px) / 2);
`;
