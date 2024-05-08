import sprite from "../../assets/icons/sprite.svg";
import * as s from "./StoreItem.styled";

const StoreItem = ({ store }) => {
  return (
    <>
      <div>
        <s.Name text={store.name} length={15} />
        <s.Location>
          <svg width={18} height={18}>
            <use href={`${sprite}#map-pin`} />
          </svg>
          <s.Address>
            <s.Text>{store.address}</s.Text>
            <s.Text>{store.city}</s.Text>
          </s.Address>
        </s.Location>
        <s.Phone>
          <svg width={18} height={18}>
            <use href={`${sprite}#phone`} />
          </svg>
          <s.Text>{store.phone}</s.Text>
        </s.Phone>
      </div>
      <s.RightBlock>
        <s.Rating>
          <svg width={16} height={16}>
            <use href={`${sprite}#star`} />
          </svg>
          <span>{store.rating}</span>
        </s.Rating>
        <s.Status $status={store.status}>{store.status}</s.Status>
      </s.RightBlock>
    </>
  );
};

export default StoreItem;
