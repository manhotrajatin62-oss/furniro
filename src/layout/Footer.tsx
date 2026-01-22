import { Link, useLocation } from "react-router-dom";
import { Shipping, Support, Trophy, Warranty } from "../components/Icons";

const Footer = () => {
  const location = useLocation();

  const hideSection =
    location.pathname == "/" || location.pathname.startsWith("/shop/");

  return (
    <>
      {!hideSection && (
        <section className="bg-light-footer h-67 w-full px-13 py-25">
          <div className="flex h-18 items-center justify-between gap-2">
            <div className="flex h-full w-fit items-center gap-2">
              <Trophy />
              <div>
                <h1 className="text-footer-black text-xl font-semibold">
                  High Quality
                </h1>
                <h2 className="text-grey3 mt-0.5">
                  crafted from top materials
                </h2>
              </div>
            </div>

            <div className="flex h-full w-fit items-center gap-2">
              <Warranty />
              <div>
                <h1 className="text-footer-black text-xl font-semibold">
                  Warranty Protection
                </h1>
                <h2 className="text-grey3 mt-0.5">Over 2 years</h2>
              </div>
            </div>

            <div className="flex h-full w-fit items-center gap-2">
              <Shipping />
              <div>
                <h1 className="text-footer-black text-xl font-semibold">
                  Free Shipping
                </h1>
                <h2 className="text-grey3 mt-0.5">Order over 150 $ </h2>
              </div>
            </div>

            <div className="flex h-full w-fit items-center gap-2">
              <Support />
              <div>
                <h1 className="text-footer-black text-xl font-semibold">
                  24 / 7 Support
                </h1>
                <h2 className="text-grey3 mt-0.5">Dedicated support</h2>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="xl:h-126 border-t border-black/17">
        <div className="flex flex-col gap-12 p-5 xl:px-25 xl:pt-12 xl:pb-9">
          {/* links */}
          <div className="flex flex-col lg:flex-row lg:h-78 items-start gap-10 xl:gap-34">
            {" "}
            {/*w-280*/}
            {/* address */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-black">Funiro.</h1>
              <p className="text-footer text-sm lg:text-base mt-4 lg:mt-12">
                400 University Drive Suite 200 Coral <br />
                Gables, <br />
                FL 33134 USA
              </p>
            </div>
            <div className="flex flex-col sm:w-full lg:w-fit sm:flex-row items-start gap-10 lg:gap-18">
              {/* links container */}
              <div className="flex w-full text-sm lg:text-base justify-between lg:h-78 lg:w-88 lg:gap-36">
                <div>
                  <p className="text-footer">Links</p>
                  <ul className="mt-5 gap-8 lg:mt-13 flex flex-col lg:gap-11">
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
                  <ul className="mt-5 gap-8 lg:mt-13 flex flex-col lg:gap-11">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                  </ul>
                </div>
              </div>

              {/* newsletter */}
              <div className="flex flex-col text-sm lg:text-base gap-4 lg:gap-13">
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
                  <button className="cursor-pointer text-sm lg:text-base border-b border-black pb-1">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="border-light-grey text-sm lg:text-base border-t">
            <p className="mt-8">2023 furino. All rights reverved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
