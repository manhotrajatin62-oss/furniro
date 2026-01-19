import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import { lazy } from "react";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default App;
