import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import StoresList from "../StoresList/StoresList";
import * as s from "./MedicineStore.styled";
import { selectStores } from "../../redux/pharmacy/selectors";
import { getAllStores } from "../../redux/pharmacy/operations";
import { useEffect } from "react";

const MedicineStore = () => {
  // const dispatch = useDispatch();
  const stores = useSelector(selectStores);

  // useEffect(() => {
  //   dispatch(getAllStores());
  // }, [dispatch]);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Medicine store</s.Title>
        <StoresList stores={stores} />
      </s.Wrapper>
    </Container>
  );
};

export default MedicineStore;
