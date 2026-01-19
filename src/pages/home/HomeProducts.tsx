import { useContext } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { ProductContext } from "../../context/ProductContext";

const HomeProducts = () => {
  const { homeProductData }: any = useContext(ProductContext);

  return (
    <section className="mx-auto mt-14 flex w-[90%] flex-col items-center gap-8">
      {/* heading */}
      <h1 className="text-grey1 text-center text-4xl font-bold">
        Our Products
      </h1>

      {/* products grid */}
      <ProductsGrid data={homeProductData} discount />

      <button className="text-dark-orange border-dark-orange cursor-pointer border px-18 py-3 font-bold">
        Show More
      </button>
    </section>
  );
};

export default HomeProducts;
