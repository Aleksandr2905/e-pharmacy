import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ModalContent from "./components/ModalContent/ModalContent";
import Modal from "./components/Modal/Modal";
import { setModalContent, setModalStatus } from "./redux/pharmacy/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "./redux/pharmacy/selectors";
import PrivateRoute from "./routes/PrivateRoute";
import Loader from "./components/Loader/Loader";
import { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MedicineStorePage = lazy(() =>
  import("./pages/MedicineStorePage/MedicineStorePage")
);
const MedicinePage = lazy(() => import("./pages/MedicinePage/MedicinePage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/medicine-store" element={<MedicineStorePage />} />
            <Route path="/medicine" element={<MedicinePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>

      <ToastContainer
        position="top-right"
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
