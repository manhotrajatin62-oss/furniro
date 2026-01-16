import { useContext } from "react";
import product1 from "../../assets/home/product1.png";
import { BoldHeart, Compare, Share } from "../../components/Icons";
import { ProductContext } from "../../context/ProductContext";

// discount bubble component
const Discount = ({ discount, value }: any) => {
  return (
    <div
      className={`${discount ? "bg-red" : "bg-green"} absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full text-center`}
    >
      <p className="text-white">{value}</p>
    </div>
  );
};

const HomeProducts = () => {
  const { homeProductData }: any = useContext(ProductContext);

  return (
    <section className="mx-auto mt-14 flex w-[90%] items-center flex-col gap-8">
      {/* heading */}
      <h1 className="text-grey1 text-center text-4xl font-bold">
        Our Products
      </h1>

      {/* products grid */}

      <div className="grid grid-cols-4 gap-8">
        {/* product card */}

        {homeProductData?.length > 0
          ? homeProductData.map((item: any) => {
              return (
                <div
                  key={item?.id}
                  className="bg-light group relative flex h-110 w-70 flex-col"
                >
                  {/* image and bubble */}
                  <div className="relative h-75">
                    <img
                      draggable={false}
                      src={item?.image}
                      className="h-full w-full object-contain object-center"
                      alt="product"
                    />
                    {item?.id == 1 ? (
                      <Discount discount value={"-30%"} />
                    ) : item?.id == 3 || item?.id == 7 ? (
                      <Discount discount value={"-50%"} />
                    ) : item?.id == 4 || item?.id == 6 || item?.id == 8 ? (
                      <Discount value={"New"} />
                    ) : null}
                  </div>

                  {/* product details */}
                  <div className="px-4 pt-4 pb-7">
                    <div>
                      <h2 className="text-grey1 truncate text-lg font-bold">
                        {item?.title}
                      </h2>
                      <h3 className="text-grey3 mt-2 text-sm font-semibold">
                        Stylish cafe chair
                      </h3>
                    </div>

                    <div className="mt-2 flex items-center gap-4">
                      <h2 className="text-grey1 text-lg font-bold">
                        Rp {item?.price}
                      </h2>
                      <h3 className="text-grey4 text-sm line-through">
                        Rp 3.500.000
                      </h3>
                    </div>
                  </div>

                  <div className="bg-grey1/72 absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="mx-auto flex w-[90%] flex-col items-center gap-6">
                      <button className="text-dark-orange cursor-pointer bg-white px-12 py-3 font-bold">
                        Add to cart
                      </button>

                      <div className="flex items-center gap-5">
                        <div className="flex cursor-pointer items-center gap-0.5">
                          <Share />
                          <p className="text-sm text-white">Share</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-0.5">
                          <Compare />
                          <p className="text-sm text-white">Compare</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-0.5">
                          <BoldHeart />
                          <p className="text-sm text-white">Like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}

      </div>
          <button className=" font-bold cursor-pointer text-dark-orange border border-dark-orange py-3 px-18">
                Show More
          </button>
    </section>
  );
};

export default HomeProducts;
