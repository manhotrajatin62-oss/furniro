import { CartCross, ShoppingBag } from "./Icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const Cart = ({ toggleCart, setToggleCart }: any) => {

  const {cart, removeFromCart}:any = useContext(ProductContext)

  const totalPrice = cart.reduce(
  (total:any, item:any) => total + item.price * item.quantity,
  0
);

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
        className={`${toggleCart ? "scale-100" : "scale-0"} overflow-y-auto fixed top-0 right-0 z-99 flex lg:h-150 w-full h-full sm:w-104  origin-top-right flex-col bg-white transition-[scale] duration-200`}
      >
        <div className="grow pt-4 pl-4 lg:pt-7 lg:pl-7">
        {/* cart heading */}
          <div className="flex items-center pr-4 lg:pr-10 justify-between">
            <h1 className="text-xl lg:text-2xl font-semibold">Shopping Cart</h1>
            <ShoppingBag setToggleCart={setToggleCart} />
          </div>

          <hr className="text-light-grey my-6 lg:mt-6 lg:mb-10 w-[85%]" />

          {/* cart items */}
          <div className="flex flex-col mr-4 overflow-y-auto h-80 gap-5">

            {cart?.length === 0 ? (
              <p className="text-center text-lg font-medium">
                Your cart is empty
              </p>
            ) : (
              cart?.map((item:any) => (
                <div key={item?.id} className="flex items-center justify-between gap-4 lg:gap-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-cart flex w-18 h-18 lg:h-26 lg:w-26 items-center justify-center rounded-lg">
                    <img draggable={false} className="w-[60%] h-[60%] object-contain" src={item?.image} alt="cart" />
                  </div>

                  <div className="w-40">
                    <h2 className="text-sm lg:text-base">{item?.title.slice(0,20)}</h2>
                    <pre className="font-light">
                      {item?.quantity}{"  "}X{"  "} 
                      <span className="text-dark-orange text-sm font-medium">
                       Rs. {item?.price}
                      </span>
                    </pre>
                  </div>
                  </div>

                  <CartCross onClick={()=>removeFromCart(item?.id)}/>
                </div>
              ))
            )}

          </div>
        </div>

        {/* subtotal and buttons */}
        <div>
          <div className="flex w-[75%] items-center justify-between pl-8">
            <p className="ml-2">Subtotal</p>
            <span className="text-dark-orange font-semibold">
              Rs. {(totalPrice).toFixed(2)}
            </span>
          </div>

          <hr className="text-light-grey mt-6" />

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 p-3 justify-center lg:p-6.5">
            <Link to={"/cart"}>
              <button
                onClick={() => setToggleCart(false)}
                className="cursor-pointer rounded-[50px] border border-black px-7 py-1.5 text-sm"
              >
                Cart
              </button>
            </Link>
            <Link to={"/checkout"}>
              <button
                onClick={() => setToggleCart(false)}
                className="cursor-pointer rounded-[50px] border border-black px-7 py-1.5 text-sm"
              >
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
