import StoreItem from "../StoreItem/StoreItem";
import * as s from "./StoresList.styled";

const StoresList = ({ stores }) => {
  return (
    <s.Wrapper>
      {stores.map((store) => (
        <s.Item key={store._id}>
          <StoreItem store={store} />
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default StoresList;
