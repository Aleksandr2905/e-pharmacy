import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectTotalPages,
} from "../../redux/pharmacy/selectors";
import { useEffect } from "react";
import { getProducts } from "../../redux/pharmacy/operations";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./Medicine.styled";
import ProductsList from "../ProductsList/ProductsList";
import Filter from "../Filter/Filter";

const Medicine = () => {
  // const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const totalPages = useSelector(selectTotalPages);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Medicine</s.Title>
        <Filter totalPages={totalPages} />
        <ProductsList products={products} />
      </s.Wrapper>
    </Container>
  );
};

export default Medicine;
