import { useLocation, useNavigate } from "react-router-dom";
import hero from "../assets/hero.jpg";
import logo from "../assets/logo.svg";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

const Hero = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation();
  let path = pathname.slice(1);

  let heading = "";

  if (pathname === "/shop") heading = "Shop";
  else if (pathname === "/about") heading = "About";
  else if (pathname === "/comparison") heading = "Product Comparison";
  else if (pathname === "/cart") heading = "Cart";
  else if (pathname === "/checkout") heading = "Checkout";
  else if (pathname === "/contact") heading = "Contact";
  else if (pathname === "/blog") heading = "Blog";

  return (
    <section className="relative mt-20 flex h-79 items-center justify-center overflow-hidden">
      <img draggable={false}
        src={hero}
        className="h-fit w-fit opacity-50 blur-[.1875rem]"
        alt="hero"
      />
      <div className="absolute top-[50%] left-[50%] flex translate-[-50%] flex-col items-center text-center font-medium">
        {pathname !== "/shop" && (
          <img  draggable={false} className="h-15 w-15" src={logo} alt="logo" />
        )}
        <h1 className="text-5xl capitalize">{heading}</h1>
        <Breadcrumb className="mt-2" aria-label="Breadcrumbs">
          <BreadcrumbItem
           onClick={()=>navigate("/")}
            className="[&>span]:text-black cursor-pointer [&>a:hover]:text-black! [&>svg]:text-black"
          >
            Home
          </BreadcrumbItem>

          <BreadcrumbItem className="capitalize cursor-pointer [&>span]:font-light [&>span]:text-black [&>svg]:text-black">
            {path}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default Hero;
