import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Shop from "./pages/shop/Shop";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/single-product/SingleProduct";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import LoginPage from "./auth/LoginPage";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
