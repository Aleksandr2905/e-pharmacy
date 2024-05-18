import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGrey30};

  & > :not(:last-child) {
    padding-right: 10px;
    border-right: 1px solid ${({ theme }) => theme.color.lightGrey30};
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    padding-top: 33px;
    gap: 24px;

    & > :not(:last-child) {
      padding-right: 24px;
    }
  }
`;

export const Item = styled.li`
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.color.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
