import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MedicineStorePage from "./pages/MedicineStorePage/MedicineStorePage";
import MedicinePage from "./pages/MedicinePage/MedicinePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
};

export default App;
