import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 27px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  transition: all 0.3s;
  color: ${({ theme, $active }) =>
    $active ? theme.color.white : theme.color.green};
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.green : theme.color.lightGreen};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.textModal};
`;

export const Prescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.color.black};

  & span {
    color: ${({ theme }) => theme.color.textModal};
  }
`;

export const Reviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Review = styled.li`
  display: inline-flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 28px;
  border-radius: 20px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};
  background: ${({ theme }) => theme.color.white};
`;

export const Profile = styled.div`
  display: flex;
  gap: 20px;
`;

export const Photo = styled.img`
  width: 44px;
  height: 44px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Reviewer = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.p`
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: absolute;
  top: 14px;
  right: 28px;

  & svg {
    fill: ${({ theme }) => theme.color.yellow};
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Comment = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.textModal};
`;
