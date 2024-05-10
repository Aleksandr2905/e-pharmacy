import styled from "styled-components";
import EllipsisText from "react-ellipsis-text";

export const Name = styled(EllipsisText)`
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

export const Location = styled.div`
  display: flex;
  gap: 8px;
  margin-top: ${({ $isHomePage }) => ($isHomePage ? "32px" : "20px")};
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Text = styled.p`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.grey};
`;

export const Phone = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;
  margin-bottom: ${({ $isHomePage }) => ($isHomePage ? "0" : "36px")};
  position: relative;

  &::before {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    left: ${({ $isHomePage }) => ($isHomePage ? "191.394px" : "191.418px")};
    bottom: ${({ $isHomePage }) => ($isHomePage ? "-65.113px" : "37.418px")};
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  }
`;

export const RightBlock = styled.div`
  position: absolute;
  right: 32px;
  top: ${({ $isHomePage }) => ($isHomePage ? "32px" : "none")};
  bottom: ${({ $isHomePage }) => ($isHomePage ? "none" : "32px")};
  display: flex;
  gap: 14px;
  height: 34px;
  align-items: center;
`;

export const Rating = styled.p`
  display: flex;
  gap: 6px;

  & svg {
    fill: ${({ theme }) => theme.color.yellow};
  }

  & span {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Status = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${(props) =>
    props.$status === "open"
      ? props.theme.color.lightGreen
      : props.theme.color.lightRed};
  color: ${(props) =>
    props.$status === "open" ? props.theme.color.green : props.theme.color.red};
`;
