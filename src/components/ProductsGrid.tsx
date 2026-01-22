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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-4 lg:gap-8">
      {" "}
      {/*h-230 */}
      {/* product card */}
      {data?.length > 0
        ? data.map((item: any) => {
            return (
              <div
                key={item?.id}
                className="bg-light shadow-md shadow-gray-300 group relative flex flex-col lg:h-110 lg:w-70"
              >
                {/* image and bubble */}
                <div className="relative flex items-center bg-white justify-center h-40 lg:h-75">
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
                    <h2 className="text-grey1 truncate lg:text-lg font-bold">
                      {item?.title}
                    </h2>
                    <h3 className="text-grey3 mt-2 text-xs lg:text-sm font-semibold">
                      Stylish cafe chair
                    </h3>
                  </div>

                  <div className="mt-2 flex flex-col lg:flex-row items-start lg:items-center lg:gap-4">
                    <h2 className="text-grey1 lg:text-lg font-bold">
                      Rp {item?.price}
                    </h2>
                    <h3 className="text-grey4 text-xs lg:text-sm line-through">
                      Rp 3.500.000
                    </h3>
                  </div>
                  </div>
              
                  {/* add to cart for mobile  */}
                     <div className="mt-4 bg-grey1/72 flex flex-col lg:mt-10 lg:hidden items-center gap-4">
                    <button
                      onClick={() => navigate(`/shop/${item?.id}`)}
                      className="text-dark-orange w-full cursor-pointer bg-white p-2 border border-dark-orange text-sm lg:px-12 lg:py-3 font-bold"
                    >
                      Add to cart
                    </button>

                  </div>
                  
                

                <div className="bg-grey1/72 hidden absolute top-0 right-0 bottom-0 left-0 z-90 lg:flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
