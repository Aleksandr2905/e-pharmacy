import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/pharmacy/selectors";
import { useEffect } from "react";
import { getProducts } from "../../redux/pharmacy/operations";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./Medicine.styled";
import ProductsList from "../ProductsList/ProductsList";

const Medicine = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);

  console.log("PRODUCTS", products);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Medicine</s.Title>
        <ProductsList products={products} />
      </s.Wrapper>
    </Container>
  );
};

export default Medicine;
