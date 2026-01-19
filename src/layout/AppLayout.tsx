import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import useScrollToTop from "../hooks/useScrollToTop"

const AppLayout = () => {

  useScrollToTop();
  return (
    <>
    <header>
        <Navbar/>
    </header>

    <main>
        <Outlet/>
    </main>

    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default AppLayout