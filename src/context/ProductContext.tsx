import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }: any) => {
  const [productData, setProductData] = useState<any[]>([]); // complete data
  const [cart, setCart] = useState<any[]>([]); // cart items
  const [toggleCart, setToggleCart] = useState(false); // toggle cart section
  const [quantity, setQuantity] = useState(0); // how many products to add in cart
  const [message, setMessage] = useState(""); // validation for the quantity of products
  const [hasLoaded, setHasLoaded] = useState(false); // load the cart data on reload
  const [openModal, setOpenModal] = useState(false); // open/close modal
  const [searchValue, setSearchValue] = useState(""); // search input value

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchValue.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchValue)}`);
  };

  // fetch products
  async function fetchData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.error(error);
    }
  }

  // add to cart
  function handleAddToCart(singleProductData: any) {
    if (quantity === 0) {
      setMessage("Please select at least 1 item");
      return;
    }

    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === singleProductData.id);

      if (index !== -1) {
        const updated = [...prev];
        updated[index].quantity = quantity;
        return updated;
      }

      return [...prev, { ...singleProductData, quantity }];
    });
  }

  // increment
  function increment(singleProductData: any) {
    if (quantity >= 5) {
      setMessage("Only 5 items are allowed");
      return;
    }

    const newQty = quantity + 1;
    setQuantity(newQty);

    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === singleProductData.id);

      if (index === -1) return prev;

      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  }

  // decrement
  function decrement(singleProductData: any) {
    if (quantity <= 0) return;

    const newQty = quantity - 1;
    setQuantity(newQty);

    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === singleProductData.id);

      if (index === -1) return prev;

      // remove if qty becomes 0
      if (newQty === 0) {
        return prev.filter((item) => item.id !== singleProductData.id);
      }

      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  }

  // remove from cart
  function removeFromCart(productId: number) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  // check if product exists in cart
  function isInCart(productId: number) {
    if (!productId) return false;

    return cart.some((item) => item.id === productId);
  }

  // auto hide message
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  // load cart on page reload
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCart(storedCart);
    setHasLoaded(true);
  }, []);

  // sync cart to localstorage
  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, hasLoaded]);

  // fetch products
  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({
      productData,
      cart,
      toggleCart,
      setToggleCart,
      quantity,
      removeFromCart,
      isInCart,
      setQuantity,
      message,
      handleAddToCart,
      increment,
      decrement,
      openModal,
      setOpenModal,
      searchValue,
      setSearchValue,
      handleSearch,
    }),
    [productData, cart, toggleCart, quantity, message, openModal, searchValue],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
