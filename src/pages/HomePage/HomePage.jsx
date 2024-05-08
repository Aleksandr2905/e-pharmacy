import MainBanner from "../../components/MainBanner/MainBanner";
import MedicineStores from "../../components/MedicineStores/MedicineStores";
import PharmacyPromo from "../../components/PharmacyPromo/PharmacyPromo";
import PromoBanners from "../../components/PromoBanners/PromoBanners";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <PharmacyPromo />
      <Reviews />
    </>
  );
};

export default HomePage;
