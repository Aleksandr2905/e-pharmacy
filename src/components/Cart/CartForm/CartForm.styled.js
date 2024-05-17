import styled from "styled-components";

export const Wrapper = styled.form`
  padding: 20px 20px 40px;
  border-radius: 27px;
  background: ${({ theme }) => theme.color.white};
`;

export const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.textModal};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 40px;
  margin: 20px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderInput};
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  margin: 20px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderInput};
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: fit-content;
  cursor: pointer;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.black};
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.color.white};
    border-color: ${({ theme }) => theme.color.green};

    &::after {
      transform: scale(1);
    }
  }
`;

export const RadioCustom = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.3s;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 14px 18px;
  border-radius: 8px;
  background: #e7f1ed;
`;

export const Total = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;
