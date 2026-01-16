import logo from "../assets/logo.svg";
import { Cart, Heart, Search, User } from "./Icons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-99 bg-white">
      <section className="flex h-10 items-center justify-between py-7 pr-25 pl-13.5">
        {/* brand logo*/}
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="brand logo" />
          <h1 className="text-3xl font-bold">Furniro</h1>
        </div>

        {/* nav list */}
        <ul className="flex items-center gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
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
