import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./layout/AppLayout";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
