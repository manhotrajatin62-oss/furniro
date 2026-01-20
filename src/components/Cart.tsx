import { CartCross, ShoppingBag } from "./Icons";
import cartImg from "../assets/cart.png";
import { Link } from "react-router-dom";

const Cart = ({ toggleCart, setToggleCart }: any) => {
  return (
    <>
      {toggleCart && (
        <button
          onClick={() => setToggleCart(false)}
          className="fixed top-0 right-0 bottom-0 left-0 bg-black/20"
          aria-label="Close cart"
        />
      )}

      <section
        className={`${toggleCart ? "scale-100" : "scale-0"} fixed top-0 right-0 z-99 flex h-150 w-104 origin-top-right flex-col bg-white transition-[scale] duration-200`}
      >
        {/* cart heading */}
        <div className="grow pt-7 pr-10 pl-7">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <ShoppingBag setToggleCart={setToggleCart} />
          </div>

          <hr className="text-light-grey mt-6 mb-10 w-[85%]" />

          {/* cart items */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-8">
              <div className="bg-cart flex h-26 w-26 items-center justify-center rounded-lg">
                <img src={cartImg} alt="cart" />
              </div>

              <div className="mr-7.5">
                <h2>Asgaard sofa</h2>
                <pre className="font-light">
                  1{"  "}X{"  "}
                  <span className="text-dark-orange text-sm font-medium">
                    Rs. 250,000.00
                  </span>
                </pre>
              </div>

              <CartCross />
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-cart flex h-26 w-26 items-center justify-center rounded-lg">
                <img src={cartImg} alt="cart" />
              </div>

              <div className="mr-7.5">
                <h2>Asgaard sofa</h2>
                <pre className="font-light">
                  1{"  "}X{"  "}
                  <span className="text-dark-orange text-sm font-medium">
                    Rs. 250,000.00
                  </span>
                </pre>
              </div>

              <CartCross />
            </div>
          </div>
        </div>

        {/* subtotal and buttons */}
        <div>
          <div className="flex w-[75%] items-center justify-between pl-8">
            <p className="ml-2">Subtotal</p>
            <span className="text-dark-orange font-semibold">
              Rs. 520,000.00
            </span>
          </div>

          <hr className="text-light-grey mt-6" />

          <div className="flex items-center gap-3 p-6.5">
            <Link to={"/cart"}>
            <button onClick={()=>setToggleCart(false)} className="cursor-pointer rounded-[50px] border border-black px-7 py-1.5 text-sm">
              Cart
            </button>
            </Link>
            <Link to={"/checkout"}>
            <button onClick={()=>setToggleCart(false)} className="cursor-pointer rounded-[50px] border border-black px-7 py-1.5 text-sm">
              Checkout
            </button>
            </Link>
          <button className="cursor-pointer rounded-[50px] border border-black px-7 py-1.5 text-sm">
              Comparison
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
