import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Cart, Heart, Search, User } from "../components/Icons";

const Navbar = () => {
  return (
    <nav className="z-999 bg-white">
      <section className="flex h-full items-center justify-between py-7 pr-25 pl-13.5">
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
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* nav icons */}
        <div className="flex items-center gap-10">
          <User />
          <Search />
          <Heart />
          <Cart />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
