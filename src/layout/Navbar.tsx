import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cart from "../components/Cart";
import { CartSvg, Heart, Search, User } from "../components/Icons";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const {toggleCart, setToggleCart }: any = useContext(ProductContext);

  console.log(toggleCart);

  return (
    <nav className="fixed top-0 right-0 left-0 z-99 bg-white">
      <section className="pr-25 flex h-full items-center justify-between py-7 pl-13.5">
        {/* brand logo*/}
        <div className="flex cursor-pointer items-center gap-1">
          <img src={logo} alt="brand logo" />
          <h1 className="text-3xl font-bold">Furniro</h1>
        </div>

        {/* nav list */}
        <ul className="flex items-center gap-10">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/shop"}>
            <li className="cursor-pointer">Shop</li>
          </Link>
          <Link to={"/about"}>
            <li className="cursor-pointer">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>

        {/* nav icons */}
        <div className="flex items-center gap-10">
          <User />
          <Search />
          <Heart />
          <CartSvg setToggleCart={setToggleCart} />
        </div>

        {/* cart section */}

          <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />

      </section>
    </nav>
  );
};

export default Navbar;
