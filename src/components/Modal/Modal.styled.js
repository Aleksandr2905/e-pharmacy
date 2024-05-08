import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: ${(props) => (props.$burger ? "flex-end" : "center")};
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  /* max-height: 100vh; */
  /* overflow-y: auto; */

  /* &::-webkit-scrollbar {
    width: 3px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
  }

  scrollbar thumb:hover {
    background-color: green;
  } */

  /* border-radius: 10px; */
`;
