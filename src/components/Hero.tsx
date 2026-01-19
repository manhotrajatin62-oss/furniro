import { Link, useLocation } from "react-router-dom";
import hero from "../assets/hero.jpg";
import { HeroArrow } from "./Icons";
import logo from "../assets/logo.svg";

const Hero = () => {
  const { pathname } = useLocation();
  let path = pathname.slice(1);

  let heading = "";

  if (pathname === "/shop") heading = "Shop";
  else if (pathname === "/about") heading = "About";
  else if (pathname === "/comparison") heading = "Product Comparison";

  return (
    <section className="relative mt-20 flex h-79 items-center justify-center overflow-hidden">
      <img
        src={hero}
        className="h-fit w-fit opacity-50 blur-[.1875rem]"
        alt="hero"
      />
      <div className="absolute top-[50%] left-[50%] flex translate-[-50%] flex-col items-center text-center font-medium">
        {pathname !== "/shop" && (
          <img className="h-19 w-19" src={logo} alt="logo" />
        )}
        <h1 className="text-5xl capitalize">{heading}</h1>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <HeroArrow />
          <p className="font-light capitalize">{path}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
