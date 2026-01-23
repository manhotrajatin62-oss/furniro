import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useScrollToTop from "../hooks/useScrollToTop";
import ScrollTo from "../UI/ScrollTo";

const AppLayout = () => {
  useScrollToTop();
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
        <ScrollTo />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AppLayout;
