import { Link } from "react-router-dom";
import Button from "../Button/Button";
import * as s from "./ProductItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/pharmacy/selectors";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);
  const isLoggedIn = false;

  const handleOpenLoginModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("LoginModal"));
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      handleOpenLoginModal();
    } else {
      console.log("ADD PRODUCT");
    }
  };

  return (
    <s.Wrapper>
      <s.Photo src={product.photo} alt={`photo ${product.name} `} />
      <s.Description>
        <s.Top>
          <s.Title>
            <s.Name>{product.name}</s.Name>
            <s.Supplier>{product.suppliers}</s.Supplier>
          </s.Title>
          <s.Price>৳{product.price}</s.Price>
        </s.Top>
        <s.Bottom>
          <Button
            type="button"
            name="buttonAdd"
            text="Add to cart"
            onClick={handleAddToCart}
          />
          <s.Details to="/product">Details</s.Details>
        </s.Bottom>
      </s.Description>
    </s.Wrapper>
  );
};

export default ProductItem;
