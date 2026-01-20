import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import { lazy } from "react";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/single-product/SingleProduct";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";

const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
