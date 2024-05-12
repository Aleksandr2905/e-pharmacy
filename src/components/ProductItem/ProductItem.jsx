import { Link } from "react-router-dom";
import Button from "../Button/Button";
import * as s from "./ProductItem.styled";
import img from "../../assets/images/mobile/heroMob@1x.png";

const ProductItem = ({ product }) => {
  console.log(product.category);

  return (
    <s.Wrapper>
      <s.Photo src={product.photo || img} alt={`photo ${product.name} `} />
      <s.Description>
        <s.Top>
          <s.Title>
            <s.Name>{product.name}</s.Name>
            <s.Supplier>{product.suppliers}</s.Supplier>
          </s.Title>
          <s.Price>৳{product.price}</s.Price>
        </s.Top>
        <s.Bottom>
          <Button type="button" name="buttonCard" text="Add to cart" />
          <s.Details to="/product">Details</s.Details>
        </s.Bottom>
      </s.Description>
    </s.Wrapper>
  );
};

export default ProductItem;
