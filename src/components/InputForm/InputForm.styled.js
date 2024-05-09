import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 18px;
  /* gap: 18px; */
  border-radius: 60px;
  border: 1px solid
    ${(props) => (props.$errors ? "red" : "rgba(29, 30, 33, 0.10)")};
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  background-color: #ffffff;
  color: #1d1e21;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(29, 30, 33, 0.6);
  }

  &:hover {
    border: 1px solid #93939a;
  }

  /* &:focus {
    caret-color: grey;
    border: 1px solid #93939a;
  } */
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: red;
`;

export const Eyes = styled.svg`
  position: absolute;
  right: 18px;
  top: 15px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  & use {
    stroke: rgba(29, 30, 33, 0.6);
    fill: transparent;
  }
`;
