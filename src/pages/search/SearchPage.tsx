import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import Loader from "../../UI/Loader";
import ProductsGrid from "../../components/ProductsGrid";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const SearchPage = () => {
  const { productData }: any = useContext(ProductContext);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const result = productData.filter(
        (product: any) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      );

      setFilteredProducts(result);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, productData]);

  if (loading) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="mx-auto my-16 w-[90%] lg:my-25">
      <button
        onClick={() => navigate("/shop")}
        className="flex cursor-pointer items-center gap-2 lg:text-xl"
      >
        <IoArrowBackCircleOutline size={30} /> Back
      </button>

      <h2 className="my-10 text-xl font-semibold lg:text-2xl">
        Showing results for <i className="text-dark-orange">"{query}"</i>
      </h2>

      <div>
        {filteredProducts.length === 0 ? (
          <p className="my-20 text-center text-2xl font-semibold">
            No products found
          </p>
        ) : (
          <ProductsGrid data={filteredProducts} />
        )}
      </div>
    </section>
  );
};

export default SearchPage;
