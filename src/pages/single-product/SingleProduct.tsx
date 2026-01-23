import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleProductBreadcrumbs = lazy(
  () => import("./SingleProductBreadcrumbs"),
);
const SingleProductDetails = lazy(() => import("./SingleProductDetails"));
import SingleProductDescription from "./SingleProductDescription";
const SingleProductsRelated = lazy(() => import("./SingleProductsRelated"));
import Loader from "../../UI/Loader";
import ErrorBoundary from "../../UI/ErrorBoundary";

const SingleProduct = () => {
  const { id } = useParams();

  const [singleProductData, setSingleProductData] = useState();

  // fetch single product
  async function fetchSingleProduct() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setSingleProductData(data);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (!id) return;

    fetchSingleProduct();
  }, [id]);

  return (
    <section className="mt-15 lg:mt-20">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* breadcrumbs */}
          <SingleProductBreadcrumbs singleProductData={singleProductData} />

          {/* product details */}
          <SingleProductDetails singleProductData={singleProductData} />
        </Suspense>
      </ErrorBoundary>

      {/* product description */}
      <SingleProductDescription />

      {/* related products */}
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <SingleProductsRelated />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default SingleProduct;
