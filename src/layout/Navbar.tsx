import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cart from "../components/Cart";
import { CartSvg, Heart, NavSearch, Search, User } from "../components/Icons";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { toggleCart, setToggleCart, cartBubble }: any = useContext(ProductContext);

  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-99 bg-white">
      <section className="flex h-full items-center justify-between py-7 pr-25 pl-13.5">
        {/* brand logo*/}
        <div className="flex cursor-pointer items-center gap-1">
          <img  draggable={false} src={logo} alt="brand logo" />
          <h1 className="text-3xl font-bold">Furniro</h1>
        </div>

        {/* nav list */}
        <ul className="flex items-center gap-10">
          <NavLink to={"/"}>
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to={"/shop"}>
            <li className="cursor-pointer">Shop</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="cursor-pointer">Contact</li>
          </NavLink>
          <NavLink to={"/blog"}>
            <li className="cursor-pointer">Blog</li>
          </NavLink>
        </ul>

        {/* nav icons */}
        <div className="flex items-center gap-10">
          <div
            className={`border-light-grey flex items-center overflow-hidden rounded-4xl border transition-all duration-300 ${showSearch ? "w-50 px-3 py-0.5 opacity-100" : "w-0 border-0 px-0 py-0 opacity-0"} `}
          >
            <input
              placeholder="Search"
              type="search"
              className="text-grey1 w-full px-1 text-sm outline-0"
              name="search"
              id="search"
              autoComplete="on"
            />
            <Search />
          </div>
          <User />
          <NavSearch setShowSearch={setShowSearch} />
          <Heart />
          <div className="relative">
            <CartSvg setToggleCart={setToggleCart} />
           {cartBubble && <div className="w-4 h-4 absolute -top-1 -right-1 rounded-full bg-red"/>}
          </div>
        </div>

        {/* cart section */}

        <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
      </section>
    </nav>
  );
};

export default Navbar;
