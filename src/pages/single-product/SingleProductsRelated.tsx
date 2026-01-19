import { useContext } from "react"
import ProductsGrid from "../../components/ProductsGrid"
import { ProductContext } from "../../context/ProductContext"
import LightButton from "../../UI/LightButton"


const SingleProductsRelated = () => {

  const {homeProductData}:any = useContext(ProductContext)

  return (
    <section className="h-185 flex flex-col items-center border-t border-light-grey">

    {/* heading */}
    <h1 className="mt-14 font-medium text-4xl text-center">Related Products</h1>

    {/* products grid */}
      <div className="mt-6 mb-11 w-[90%] mx-auto">
        <ProductsGrid data={homeProductData.slice(0,4)} discount />
      </div>

      <LightButton/>
    </section>
  )
}

export default SingleProductsRelated