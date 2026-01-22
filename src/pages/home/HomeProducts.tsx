import { useContext, useEffect, useState } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { ProductContext } from "../../context/ProductContext";
import LightButton from "../../UI/LightButton";

const HomeProducts = () => {
  const { productData }: any = useContext(ProductContext);

  const [showAll, setShowAll] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!productData) return;

    setData(productData.slice(0, 8));
  }, [productData]);

  const toggleData = () => {
    if (showAll) {
      setData(productData.slice(0, 8));
    } else {
      setData(productData);
    }

    setShowAll(!showAll);
  };

  return (
    <section className="mx-auto mt-14 flex w-[90%] flex-col items-center gap-8">
      {/* heading */}
      <h1 className="text-grey1 text-center text-2xl lg:text-4xl font-bold">
        Our Products
      </h1>

      {/* products grid */}
      <ProductsGrid data={data} discount />

      <LightButton onClick={toggleData}>
        {showAll ? "Show Less" : "Show More"}
      </LightButton>
    </section>
  );
};

export default HomeProducts;
