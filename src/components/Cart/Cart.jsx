import { Container } from "../../styles/GlobalStyles";
import * as s from "./Cart.styled";
import CartForm from "./CartForm/CartForm";
import CartList from "./CartList/CartList";

const Cart = () => {
  return (
    <Container>
      <s.Wrapper>
        <s.Title>Cart</s.Title>
        <CartForm />
        <CartList />
      </s.Wrapper>
    </Container>
  );
};

export default Cart;
