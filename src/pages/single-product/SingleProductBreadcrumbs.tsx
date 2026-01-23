import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const SingleProductBreadcrumbs = ({ singleProductData }: any) => {

  const navigate = useNavigate()

  return (
    <div className="bg-results flex flex-col sm:flex-row items-start sm:items-center lg:px-25 lg:py-8 p-4">
      <div className="mr-6 flex items-center gap-6">
        <Breadcrumb  aria-label="Breadcrumbs">
          <BreadcrumbItem
            onClick={()=>navigate("/")}
            className="[&>a]:text-footer cursor-pointer [&>a:hover]:text-footer! [&>svg]:text-black"
          >
            Home
          </BreadcrumbItem>
          <BreadcrumbItem
            onClick={()=>navigate("/shop")}
            className="[&>a]:text-footer cursor-pointer [&>a:hover]:text-footer! [&>svg]:text-black"
          >
            Shop
          </BreadcrumbItem>

          <BreadcrumbItem className="capitalize [&>span]:font-light [&>span]:text-black [&>svg]:text-black"></BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="border-footer text-sm xl:text-base sm:border-l-2 sm:pl-8.5">
        <p>{singleProductData?.title}</p>
      </div>
    </div>
  );
};

export default SingleProductBreadcrumbs;
