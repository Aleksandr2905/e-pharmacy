import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-top: 60px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  max-width: 261px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.lightGrey};

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
