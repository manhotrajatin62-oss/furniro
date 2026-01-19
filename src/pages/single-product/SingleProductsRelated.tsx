import { useContext } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { ProductContext } from "../../context/ProductContext";
import LightButton from "../../UI/LightButton";

const SingleProductsRelated = () => {
  const { homeProductData }: any = useContext(ProductContext);

  return (
    <section className="border-light-grey flex h-185 flex-col items-center border-t">
      {/* heading */}
      <h1 className="mt-14 text-center text-4xl font-medium">
        Related Products
      </h1>

      {/* products grid */}
      <div className="mx-auto mt-6 mb-11 w-[90%]">
        <ProductsGrid data={homeProductData.slice(0, 4)} discount />
      </div>

      <LightButton />
    </section>
  );
};

export default SingleProductsRelated;
