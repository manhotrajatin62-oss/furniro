import { Link, useLocation } from "react-router-dom";
import hero from "../assets/hero.jpg";
import { HeroArrow } from "./Icons";

const Hero = () => {

    const {pathname} = useLocation();
    let path = pathname.slice(1)

  return (
    <section className="relative flex h-79 items-center justify-center overflow-hidden">
      <img
        src={hero}
        className="h-fit w-fit opacity-50 blur-[.1875rem]"
        alt="hero"
      />
      <div className="absolute top-[50%] left-[50%] translate-[-50%] text-center font-medium">
        <h1 className="text-5xl">Shop</h1>
        <div className="mt-3 flex gap-1.5 items-center">
          <Link to={"/"}><p>Home</p></Link>
            <HeroArrow/> 
          <p className="capitalize font-light">{path}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
