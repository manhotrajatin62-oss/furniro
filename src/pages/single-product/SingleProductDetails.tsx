import { useContext, useEffect } from "react";
import product1 from "../../assets/single-product/product1.png";
import product2 from "../../assets/single-product/product2.png";
import product3 from "../../assets/single-product/product3.png";
import product4 from "../../assets/single-product/product4.png";
import {
  Facebook,
  HalfStar,
  Linkedin,
  Star,
  Twitter,
} from "../../components/Icons";
import { ProductContext } from "../../context/ProductContext";
import Loader from "../../UI/Loader";

let sizes = ["L", "XL", "XS"];
let color = [
  {
    color: "#816DFA",
  },
  {
    color: "#000000",
  },
  {
    color: "#B88E2F",
  },
];

const SingleProductDetails = ({ singleProductData }: any) => {
  const {
    quantity,
    message,
    handleAddToCart,
    increment,
    decrement,
    removeFromCart,
    isInCart,
    setQuantity,
  }: any = useContext(ProductContext);

  useEffect(() => {
    setQuantity(0);
  }, [singleProductData?.id, setQuantity]);

  const productId = singleProductData?.id;
  const inCart = productId ? isInCart(productId) : false;

  if (!singleProductData) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex h-full flex-col items-start gap-10 p-5 lg:flex-row xl:gap-20.5 xl:px-25 xl:pt-9 xl:pb-14">
        {/* images container */}
        <div className="mx-auto flex h-85 w-full items-start gap-8 sm:w-120 lg:h-full lg:w-full">
          <div className="flex flex-col gap-8">
            <img
              draggable={false}
              className="cursor-pointer"
              src={product1}
              alt="product"
            />
            <img
              draggable={false}
              className="cursor-pointer"
              src={product2}
              alt="product"
            />
            <img
              draggable={false}
              className="cursor-pointer"
              src={product3}
              alt="product"
            />
            <img
              draggable={false}
              className="cursor-pointer"
              src={product4}
              alt="product"
            />
          </div>

          <div className="bg-results flex h-full w-full items-center justify-center overflow-hidden rounded-lg lg:h-125 lg:w-105">
            <img
              draggable={false}
              src={singleProductData?.image}
              alt={singleProductData?.title}
              className="h-[60%] w-[60%] object-contain lg:h-[80%] lg:w-[80%]"
            />
          </div>
        </div>

        {/* product details and add to cart */}
        <div className="flex flex-col">
          <h1 className="text-2xl xl:text-4xl">{singleProductData?.title}</h1>
          <p className="text-footer text-xl font-medium xl:text-2xl">
            Rs. {singleProductData?.price}
          </p>

          <div className="mt-2.5 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star />
              <Star />
              <Star />
              <Star />
              <HalfStar />
            </div>

            <p className="text-footer border-footer border-l pl-6 text-sm font-light xl:text-base">
              {singleProductData?.rating?.count} Customer Review
            </p>
          </div>

          <p className="mt-3 text-sm xl:w-md">
            {singleProductData?.description}
          </p>

          {/* size select */}
          <div className="mt-5">
            <span className="text-footer">Size</span>

            <div className="mt-3 flex items-center gap-4">
              {sizes?.map((item) => {
                return (
                  <label key={item} className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={item}
                      className="peer hidden"
                    />
                    <p className="bg-results peer-checked:bg-dark-orange flex h-7.5 w-7.5 items-center justify-center rounded text-sm transition peer-checked:text-white">
                      {item}
                    </p>
                  </label>
                );
              })}
            </div>
          </div>

          {/* color select */}
          <div className="mt-5">
            <span className="text-footer">Color</span>

            <div className="mt-3 flex items-center gap-4">
              {color?.map((item, i) => {
                return (
                  <div
                    key={i + 1}
                    style={{ backgroundColor: `${item?.color}` }}
                    className="h-7.5 w-7.5 cursor-pointer rounded-full"
                  />
                );
              })}
            </div>
          </div>

          {/* buttons section */}
          <div className="border-b-light-grey mt-8 flex flex-col items-center justify-center gap-4 border-b pb-8 sm:flex-row sm:pb-15 xl:justify-start">
            <div className="relative">
              <div className="border-footer flex h-16 w-30 items-center justify-between rounded-lg border px-3 text-lg">
                <button
                  className="cursor-pointer"
                  onClick={() => decrement(singleProductData)}
                >
                  -
                </button>

                <p>{quantity}</p>

                <button
                  className="cursor-pointer"
                  onClick={() => increment(singleProductData)}
                >
                  +
                </button>
              </div>

              {message && (
                <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap text-red-500 xl:text-base">
                  {message}
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-col items-center gap-2 sm:mt-0 sm:flex-row">
              <button
                onClick={() =>
                  inCart
                    ? removeFromCart(singleProductData.id)
                    : handleAddToCart(singleProductData)
                }
                className="flex h-15 w-40 cursor-pointer items-center justify-center rounded-2xl border border-black text-sm xl:h-16 xl:w-53 xl:text-base"
              >
                {inCart ? "Remove from Cart" : "Add To Cart"}
              </button>

              <button className="flex h-15 w-40 cursor-pointer items-center justify-center rounded-2xl border border-black text-sm xl:h-16 xl:w-53 xl:text-base">
                <pre>+ Compare</pre>
              </button>
            </div>
          </div>

          <div className="text-footer mt-10 space-y-3 text-sm xl:text-base">
            <div className="grid grid-cols-[90px_15px_1fr] items-center">
              <span>SKU</span>
              <span>:</span>
              <span>SS001</span>
            </div>

            <div className="grid grid-cols-[90px_15px_1fr] items-center">
              <span>Category</span>
              <span>:</span>
              <span>Sofas</span>
            </div>

            <div className="grid grid-cols-[90px_15px_1fr] items-center">
              <span>Tags</span>
              <span>:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>

            <div className="grid grid-cols-[90px_15px_1fr] items-center">
              <span>Share</span>
              <span>:</span>
              <div className="flex items-center gap-6">
                <Facebook />
                <Linkedin />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
