import MainBanner from "../../components/MainBanner/MainBanner";
import PharmacyPromo from "../../components/PharmacyPromo/PharmacyPromo";
import PromoBanners from "../../components/PromoBanners/PromoBanners";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <PharmacyPromo />
    </>
  );
};

export default HomePage;
