import { useDispatch, useSelector } from "react-redux";
import { selectNearestStores } from "../../redux/pharmacy/selectors";
import { useEffect } from "react";
import { getNearestStores } from "../../redux/pharmacy/operations";
import { Container } from "../../styles/GlobalStyles";
import StoresList from "../StoresList/StoresList";
import * as s from "./MedicineStores.styled";

const MedicineStores = () => {
  const dispatch = useDispatch();
  const nearestStores = useSelector(selectNearestStores);
  console.log(nearestStores);

  useEffect(() => {
    dispatch(getNearestStores());
  }, [dispatch]);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Your Nearest Medicine Store</s.Title>
        <s.Text>Search for Medicine, Filter by your location</s.Text>
        <StoresList stores={nearestStores} />
      </s.Wrapper>
    </Container>
  );
};

export default MedicineStores;
