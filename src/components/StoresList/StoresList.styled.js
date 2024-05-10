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
  min-width: 335px;
  padding: ${({ $isHomePage }) =>
    $isHomePage ? "32px 32px 40px" : "32px 32px"};
  border-radius: 27px;
  overflow: hidden;
  border: 1.155px solid ${({ theme }) => theme.color.promoBorder};
  background-color: ${({ theme }) => theme.color.bgCardStore};

  &::before {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    right: ${({ $isHomePage }) => ($isHomePage ? "-104.256px" : "-109.582px")};
    bottom: ${({ $isHomePage }) => ($isHomePage ? "51.707px" : "216px")};
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  }

  &::after {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    right: ${({ $isHomePage }) => ($isHomePage ? "-41.914px" : "-38.582px")};
    bottom: ${({ $isHomePage }) => ($isHomePage ? "29.039px" : "196px")};
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  }

  /* &::before {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    right: -55.394px;
    bottom: -56.113px;
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  } */
`;
