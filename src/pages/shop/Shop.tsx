import { lazy, Suspense, useContext, useState } from "react";
import Hero from "../../components/Hero";
const ProductsGrid = lazy(() => import("../../components/ProductsGrid"));
const ShopResults = lazy(() => import("./ShopResults"));
import { ProductContext } from "../../context/ProductContext";
import Loader from "../../UI/Loader";
import ErrorBoundary from "../../UI/ErrorBoundary";

const Shop = () => {
  const { productData }: any = useContext(ProductContext);

  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = productData.slice(startIndex, endIndex);

  return (
    <section>
      {/* hero section */}
      <Hero />

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* results section */}
          <ShopResults
            startIndex={startIndex}
            endIndex={endIndex}
            productData={productData}
          />

          {/* products section */}
          <div className="mx-auto mt-14 mb-10 lg:mb-21 flex w-[90%] flex-col items-center gap-10">
            <ProductsGrid data={currentProducts} />

            <div className="flex h-22 items-end gap-4 lg:gap-9">
              {totalPages > 0
                ? new Array(totalPages).fill("").map((_, i) => {
                    return (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`${currentPage === i + 1 ? "bg-dark-orange text-white" : ""} grid-btn`}
                      >
                        {i + 1}
                      </button>
                    );
                  })
                : null}

              <button
                disabled={currentPage === totalPages}
                className="grid-btn w-24 disabled:cursor-not-allowed"
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((prev) => prev + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default Shop;
