import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/pharmacy/selectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "BurgerMenu":
      return <BurgerMenu />;
    default:
      return null;
  }
};

export default ModalContent;
