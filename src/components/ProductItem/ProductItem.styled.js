import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.borderProductCard};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-width: 335px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

export const Supplier = styled.p`
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ $isProductPage }) =>
    $isProductPage ? "row-reverse" : "row"};
`;

export const Details = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: all 0.3s;
  border: none;
  background-color: transparent;
  font-feature-settings: "clig" off, "liga" off;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
