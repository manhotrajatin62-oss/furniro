import { createContext, useEffect, useMemo, useState } from "react";

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }: any) => {
  const [productData, setProductData] = useState([]); // complete data
  const [homeProductData, setHomeProductData] = useState([]); // data for home products section
  const [loading, setLoading] = useState(false); // false while data is being fetched

  const [toggleCart, setToggleCart] = useState(false); // toggle cart section

  // fetch products data
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setProductData(data);
      setHomeProductData(data.slice(0, 8));
      setLoading(false);
    } catch (error: any) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({
      homeProductData,
      productData,
      setLoading,
      toggleCart,
      setToggleCart,
    }),
    [homeProductData, productData, setLoading, toggleCart, setToggleCart],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
