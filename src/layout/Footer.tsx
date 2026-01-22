import { Link, useLocation } from "react-router-dom";
import { Shipping, Support, Trophy, Warranty } from "../components/Icons";

const Footer = () => {
  const location = useLocation();

  const hideSection =
    location.pathname == "/" || location.pathname.startsWith("/shop/");

  const footerOps = [
    {
      icon: <Trophy />,
      heading: "High Quality",
      subheading: "crafted from top materials",
    },
    {
      icon: <Warranty />,
      heading: "Warranty Protection",
      subheading: "Over 2 years",
    },
    {
      icon: <Shipping />,
      heading: "Free Shipping",
      subheading: "Order over 150 $",
    },
    {
      icon: <Support />,
      heading: "24 / 7 Support",
      subheading: "Dedicated support",
    },
  ];

  return (
    <>
      {!hideSection && (
        <section className="bg-light-footer w-full p-5 lg:h-67 lg:px-13 lg:py-25">
          <div className="flex flex-col  items-start justify-between gap-4 lg:h-18 sm:flex-wrap sm:flex-row">
            {footerOps.map((item) => (
              <div
                key={item?.heading}
                className="flex h-full w-60 lg:w-fit items-center gap-2"
              >
                {item?.icon}
                <div>
                  <h1 className="text-footer-black font-semibold whitespace-nowrap lg:text-xl">
                    {item?.heading}
                  </h1>
                  <h2 className="text-grey3 mt-0.5 text-sm lg:text-base">
                    {item?.subheading}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-black/17 xl:h-126">
        <div className="flex flex-col gap-12 p-5 xl:px-25 xl:pt-12 xl:pb-9">
          {/* links */}
          <div className="flex flex-col items-start gap-10 lg:h-78 lg:flex-row xl:gap-34">
            {" "}
            {/*w-280*/}
            {/* address */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-black">Funiro.</h1>
              <p className="text-footer mt-4 text-sm lg:mt-12 lg:text-base">
                400 University Drive Suite 200 Coral <br />
                Gables, <br />
                FL 33134 USA
              </p>
            </div>
            <div className="flex flex-col items-start gap-10 sm:w-full sm:flex-row lg:w-fit lg:gap-18">
              {/* links container */}
              <div className="flex w-full justify-between text-sm lg:h-78 lg:w-88 lg:gap-36 lg:text-base">
                <div>
                  <p className="text-footer">Links</p>
                  <ul className="mt-5 flex flex-col gap-8 lg:mt-13 lg:gap-11">
                    <Link to={"/"}>
                      <li>Home</li>
                    </Link>
                    <Link to={"/shop"}>
                      <li>Shop</li>
                    </Link>
                    <Link to={"/about"}>
                      <li>About</li>
                    </Link>
                    <Link to={"/contact"}>
                      <li>Contact</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <p className="text-footer">Help</p>
                  <ul className="mt-5 flex flex-col gap-8 lg:mt-13 lg:gap-11">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                  </ul>
                </div>
              </div>

              {/* newsletter */}
              <div className="flex flex-col gap-4 text-sm lg:gap-13 lg:text-base">
                <p className="text-footer">Newsletter</p>

                <div className="flex items-center gap-3">
                  <input
                    placeholder="Enter Your Email Address"
                    className="w-50 border-b border-black pb-1 text-sm outline-0"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="on"
                  />
                  <button className="cursor-pointer border-b border-black pb-1 text-sm lg:text-base">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="border-light-grey border-t text-sm lg:text-base">
            <p className="mt-8">2023 furino. All rights reverved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
