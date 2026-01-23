import { useNavigate } from "react-router-dom";
import { BoldHeart, Compare, Share } from "../components/Icons";

// discount bubble component
const Discount = ({ discount, value }: any) => {
  return (
    <div
      className={`${discount ? "bg-red" : "bg-green"} absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full text-center lg:h-12 lg:w-12`}
    >
      <p className="text-xs text-white lg:text-base">{value}</p>
    </div>
  );
};

const getDiscountBadge = (itemId: number, discount: boolean) => {
  if (!discount) return null;
  if (itemId === 1) return <Discount discount value={"-30%"} />;
  if (itemId === 3 || itemId === 7) return <Discount discount value={"-50%"} />;
  if (itemId === 4 || itemId === 6 || itemId === 8)
    return <Discount value={"New"} />;
  return null;
};

const ProductsGrid = ({ data, discount }: any) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      {" "}
      {/*h-230 */}
      {/* product card */}
      {data?.length > 0
        ? data.map((item: any) => {
            return (
              <div
                key={item?.id}
                className="bg-light group relative flex flex-col shadow-md shadow-gray-300 lg:h-110 lg:w-70"
              >
                {/* image and bubble */}
                <div className="relative flex h-40 items-center justify-center bg-white lg:h-75">
                  <img
                    draggable={false}
                    src={item?.image}
                    className="h-[80%] w-[80%] object-contain object-center"
                    alt="product"
                  />
                  {getDiscountBadge(item?.id, discount)}
                </div>

                {/* product details */}
                <div className="px-4 pt-4 lg:pb-7">
                  <div>
                    <h2 className="text-grey1 truncate font-bold lg:text-lg">
                      {item?.title}
                    </h2>
                    <h3 className="text-grey3 mt-2 text-xs font-semibold lg:text-sm">
                      Stylish cafe chair
                    </h3>
                  </div>

                  <div className="mt-2 flex flex-col items-start lg:flex-row lg:items-center lg:gap-4">
                    <h2 className="text-grey1 font-bold lg:text-lg">
                      Rp {item?.price}
                    </h2>
                    <h3 className="text-grey4 text-xs line-through lg:text-sm">
                      Rp 3.500.000
                    </h3>
                  </div>
                </div>

                {/* add to cart for mobile  */}
                <div className="bg-grey1/72 mt-4 flex flex-col items-center gap-4 lg:mt-10 lg:hidden">
                  <button
                    onClick={() => navigate(`/shop/${item?.id}`)}
                    className="text-dark-orange border-dark-orange w-full cursor-pointer border bg-white p-2 text-sm font-bold lg:px-12 lg:py-3"
                  >
                    Add to cart
                  </button>
                </div>

                <div className="bg-grey1/72 absolute top-0 right-0 bottom-0 left-0 z-90 hidden items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex">
                  <div className="mx-auto flex w-[90%] flex-col items-center gap-6">
                    <button
                      onClick={() => navigate(`/shop/${item?.id}`)}
                      className="text-dark-orange cursor-pointer bg-white px-12 py-3 font-bold"
                    >
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
  );
};

export default ProductsGrid;
