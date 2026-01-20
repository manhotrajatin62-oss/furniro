import { useState } from "react";
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

const SingleProductDetails = ({ singleProductData }: any) => {
  const [quantity, setQuantity] = useState(1);

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

  function decrement() {
    if (quantity <= 0) return;

    setQuantity((prev) => prev - 1);
  }

  function increment() {
    if(quantity >= 5) return;
    setQuantity((prev) => prev + 1);
  }

  console.log(singleProductData);

  return (
    <div>
      <div className="flex h-full items-start gap-20.5 px-25 pt-9 pb-14">
        {/* images container */}
        <div className="flex items-start gap-8">
          <div className="flex flex-col gap-8">
            <img draggable={false} className="cursor-pointer" src={product1} alt="product" />
            <img draggable={false} className="cursor-pointer" src={product2} alt="product" />
            <img draggable={false} className="cursor-pointer" src={product3} alt="product" />
            <img draggable={false} className="cursor-pointer" src={product4} alt="product" />
          </div>

          <div className="bg-results flex h-125 w-105 items-center justify-center overflow-hidden rounded-lg">
            <img draggable={false}
              src={singleProductData?.image}
              alt={singleProductData?.title}
              className="h-[80%] w-[80%] object-contain"
            />
          </div>
        </div>

        {/* product details and add to cart */}
        <div className="flex flex-col">
          <h1 className="text-4xl">{singleProductData?.title}</h1>
          <p className="text-footer text-2xl font-medium">
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

            <p className="text-footer border-footer border-l pl-6 font-light">
              {singleProductData?.rating?.count} Customer Review
            </p>
          </div>

          <p className="mt-3 w-md text-sm">{singleProductData?.description}</p>

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
          <div className="border-b-light-grey mt-8 flex items-center gap-4 border-b pb-15">
            <div className="border-footer flex h-16 w-30 items-center justify-between rounded-lg border px-3 text-lg">
              <button className="cursor-pointer" onClick={decrement}>
                -
              </button>
              <p>{quantity}</p>
              <button className="cursor-pointer" onClick={increment}>
                +
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-16 w-53 cursor-pointer items-center justify-center rounded-2xl border border-black">
                Add To Cart
              </button>
              <button className="flex h-16 w-53 cursor-pointer items-center justify-center rounded-2xl border border-black">
                <pre>+ Compare</pre>
              </button>
            </div>
          </div>

          <div className="text-footer  mt-10 space-y-3">
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
