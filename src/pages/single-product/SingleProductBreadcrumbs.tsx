import { Link } from "react-router-dom";
import { HeroArrow } from "../../components/Icons";

const SingleProductBreadcrumbs = ({ singleProductData }: any) => {
  return (
    <div className="bg-results flex items-center px-25 py-8">
      <div className="mr-6 flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <p className="text-footer">Home</p>
          </Link>
          <HeroArrow />
        </div>

        <div className="flex items-center gap-5">
          <Link to={"/shop"}>
            <p className="text-footer">Shop</p>
          </Link>
          <HeroArrow />
        </div>
      </div>

      <div className="border-footer border-l-2 pl-8.5">
        <p>{singleProductData?.title}</p>
      </div>
    </div>
  );
};

export default SingleProductBreadcrumbs;
