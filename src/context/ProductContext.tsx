import { createContext, useEffect, useMemo, useState } from "react";

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }: any) => {
  const [productData, setProductData] = useState([]); // complete data
  const [toggleCart, setToggleCart] = useState(false); // toggle cart section

  // fetch products data
  async function fetchData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setProductData(data);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({
      productData,
      toggleCart,
      setToggleCart,
    }),
    [productData, toggleCart, setToggleCart],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
