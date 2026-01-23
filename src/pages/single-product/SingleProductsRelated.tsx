import { useContext, useEffect, useState } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { ProductContext } from "../../context/ProductContext";
import LightButton from "../../UI/LightButton";

const SingleProductsRelated = () => {
  const { productData }: any = useContext(ProductContext);

  const [showAll, setShowAll] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!productData) return;

    setData(productData.slice(0, 4));
  }, [productData]);

  const toggleData = () => {
    if (showAll) {
      setData(productData.slice(0, 4));
    } else {
      setData(productData);
    }

    setShowAll(!showAll);
  };

  return (
    <section className="border-light-grey flex mb-23 flex-col items-center border-t">
      {/* heading */}
      <h1 className="mt-14 text-center text-2xl xl:text-4xl font-medium">
        Related Products
      </h1>

      {/* products grid */}
      <div className="mx-auto mt-6 mb-11 w-[90%]">
        <ProductsGrid data={data} discount />
      </div>

      <LightButton onClick={toggleData}>
        {showAll ? "Show Less" : "Show More"}
      </LightButton>
    </section>
  );
};

export default SingleProductsRelated;
