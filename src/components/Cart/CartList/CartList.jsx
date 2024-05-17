import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../../redux/pharmacy/selectors";
import { useEffect } from "react";
import {
  addCart,
  decreaseQuantity,
  deleteCart,
  getCartItems,
  getProductById,
} from "../../../redux/pharmacy/operations";
import Counter from "../../Counter/Counter";
import * as s from "./CartList.styled";

const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const quantity = cart?.cartProducts?.length || "";

  console.log(cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, quantity]);

  const handleIncreaseAmount = (id) => {
    dispatch(
      addCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleDecreaseAmount = (id) => {
    dispatch(
      decreaseQuantity({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteCart(id));
  };

  const handleProductClick = (id) => {
    dispatch(getProductById(id)).then(() => {
      navigate("/product");
    });
  };

  return (
    <s.List>
      {cart?.cartProducts?.map((product, index) => (
        <s.Wrapper
          key={product.productId._id}
          //   onClick={() => handleProductClick(product.productId._id)}
          hasLine={index < cart.cartProducts.length - 1}
        >
          <s.Photo src={product.productId.photo} alt={product.productId.name} />
          <s.Description>
            <s.NameBlock>
              <s.Name>{product.productId.name}</s.Name>
              <s.Suppliers>{product.productId.suppliers}</s.Suppliers>
            </s.NameBlock>
            <s.Price>৳ {product.productId.price}</s.Price>
            <s.BtnBlock>
              <Counter
                amount={product.quantity}
                onIncrease={() => handleIncreaseAmount(product.productId._id)}
                onDecrease={() => handleDecreaseAmount(product.productId._id)}
                $cart
              />
              <s.Remove
                type="button"
                onClick={() => handleDeleteProduct(product.productId._id)}
              >
                Remove
              </s.Remove>
            </s.BtnBlock>
          </s.Description>
        </s.Wrapper>
      ))}
    </s.List>
  );
};

export default CartList;
