import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import { lazy } from "react";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/single-product/SingleProduct";
import CartPage from "./pages/cart/CartPage";

const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
