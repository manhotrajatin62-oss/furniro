import { useContext } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { ProductContext } from "../../context/ProductContext";
import LightButton from "../../UI/LightButton";

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

      <LightButton/>
    </section>
  );
};

export default HomeProducts;
