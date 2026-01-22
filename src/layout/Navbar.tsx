import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cart from "../components/Cart";
import { CartSvg, Heart, NavSearch, Search } from "../components/Icons";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { IoClose, IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import ModalPage from "../UI/ModalPage";
import LogoutDropdown from "../components/LogoutDropdown";

const Navbar = () => {
  const { toggleCart, setToggleCart, setOpenModal, cart }: any =
    useContext(ProductContext);

  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  function clearStorage() {
    localStorage.clear();
    navigate("/login");
    setOpenModal(false);
    toast.error("Logout Successful");
  }

  const [mobileMenu, setMobileMenu] = useState(false);

  const cartCount = cart.reduce(
    (total: any, item: any) => total + item.quantity,
    0,
  );

  return (
    <>
      {/* mobile navbar */}
      <nav className="fixed top-0 right-0 left-0 z-99 block bg-white lg:hidden">
        <section className="flex h-full items-center justify-between px-4 py-2">
          {/* brand logo*/}
          <div className="flex cursor-pointer items-center gap-1">
            <img
              className="h-10 w-10"
              draggable={false}
              src={logo}
              alt="brand logo"
            />
            <h1 className="text-xl md:text-2xl font-bold">Furniro</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* user info and logout */}
            <LogoutDropdown />

            {/* cart button */}
            <button
              onClick={() => setToggleCart((prev: any) => !prev)}
              className="relative"
            >
              <CartSvg />
              {cartCount > 0 && (
                <div className="bg-red absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-sm text-white">
                  {cartCount}
                </div>
              )}
            </button>

            <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />

            {mobileMenu ? (
              <IoClose onClick={() => setMobileMenu(false)} size={30} />
            ) : (
              <IoMenu onClick={() => setMobileMenu(true)} size={30} />
            )}
          </div>
        </section>

        <section
          className={`${mobileMenu ? "h-50" : "h-0"} mt-2 overflow-hidden px-4 transition-[height] duration-200`}
        >
          <ul className="flex flex-col items-start gap-4 text-sm lg:text-base">
            <NavLink className="w-[80%]" to={"/"}>
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <NavLink className="w-[80%]" to={"/shop"}>
              <li className="cursor-pointer">Shop</li>
            </NavLink>
            <NavLink className="w-[80%]" to={"/contact"}>
              <li className="cursor-pointer">Contact</li>
            </NavLink>
            <NavLink className="w-[80%]" to={"/blog"}>
              <li className="cursor-pointer">Blog</li>
            </NavLink>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <div
              className={`border-light-grey flex items-center overflow-hidden rounded-4xl border bg-white transition-all duration-300 ${showSearch ? "w-50 px-3 py-0.5 opacity-100" : "w-0 border-0 px-0 py-0 opacity-0"} `}
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

            <NavSearch setShowSearch={setShowSearch} />
            <Heart />
          </div>
        </section>
      </nav>

      {/* desktop navbar */}
      <nav className="fixed top-0 right-0 left-0 z-99 hidden bg-white lg:block">
        <section className="flex h-full items-center justify-between py-7 lg:pl-8 lg:pr-8 xl:pr-25 xl:pl-13.5">
          {/* brand logo*/}
          <div className="flex cursor-pointer items-center gap-1">
            <img draggable={false} src={logo} alt="brand logo" />
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
          <div className="flex items-center gap-8 xl:gap-10">
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
            <LogoutDropdown />

            <NavSearch setShowSearch={setShowSearch} />
            <Heart />
            <button
              onClick={() => setToggleCart((prev: any) => !prev)}
              className="relative"
            >
              <CartSvg />
              {cartCount > 0 && (
                <div className="bg-red absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-sm text-white">
                  {cartCount}
                </div>
              )}
            </button>
          </div>

          {/* cart section */}

          <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
        </section>
      </nav>

      <ModalPage onClick={clearStorage}>{"Logout"}</ModalPage>
    </>
  );
};

export default Navbar;
