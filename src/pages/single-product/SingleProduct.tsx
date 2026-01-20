import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import SingleProductBreadcrumbs from "./SingleProductBreadcrumbs";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductsRelated from "./SingleProductsRelated";

const SingleProduct = () => {
  const { id } = useParams();

  const { setLoading }: any = useContext(ProductContext);

  const [singleProductData, setSingleProductData] = useState();

  // fetch single product
  async function fetchSingleProduct() {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setSingleProductData(data);
      setLoading(false);
    } catch (error: any) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!id) return;

    fetchSingleProduct();
  }, [id]);

  return (
    <section className="mt-20">

      {/* breadcrumbs */}
      <SingleProductBreadcrumbs singleProductData={singleProductData} />

      {/* product details */}
      <SingleProductDetails  singleProductData={singleProductData}/>

      {/* product description */}
      <SingleProductDescription/>

      {/* related products */}
      <SingleProductsRelated/>
    </section>
  );
};

export default SingleProduct;
