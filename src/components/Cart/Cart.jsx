import { useSelector } from "react-redux";
import { selectCart } from "../../redux/pharmacy/selectors";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./Cart.styled";
import CartForm from "./CartForm/CartForm";
import CartList from "./CartList/CartList";
import basket from "../../assets/images/cart.png";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Cart</s.Title>
        {!cart || !cart.cartProducts || cart.cartProducts.length === 0 ? (
          <s.BlockEmpty>
            <s.Image src={basket} alt="basket" />
            <s.Text>Your basket is empty...</s.Text>
            <s.Text>
              Go to the <s.LinkPage to="/medicine">Medicine page</s.LinkPage> to
              select the products you need and add them to your cart.
            </s.Text>
          </s.BlockEmpty>
        ) : (
          <s.Block>
            <CartForm />
            <CartList />
          </s.Block>
        )}
      </s.Wrapper>
    </Container>
  );
};

export default Cart;
