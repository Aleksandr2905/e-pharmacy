import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1184px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Block = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 96px;
  }
`;

export const BlockEmpty = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 250px;
  height: 250px;
`;

export const Text = styled.p`
  width: 320px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.8;
  color: ${({ theme }) => theme.color.black};
`;

export const LinkPage = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.green};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
