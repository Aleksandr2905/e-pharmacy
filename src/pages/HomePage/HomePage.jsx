import MainBanner from "../../components/MainBanner/MainBanner";
import MedicineStores from "../../components/MedicineStores/MedicineStores";
import PharmacyPromo from "../../components/PharmacyPromo/PharmacyPromo";
import PromoBanners from "../../components/PromoBanners/PromoBanners";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <PharmacyPromo />
    </>
  );
};

export default HomePage;
