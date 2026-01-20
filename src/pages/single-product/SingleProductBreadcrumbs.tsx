import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

const SingleProductBreadcrumbs = ({ singleProductData }: any) => {
  return (
    <div className="bg-results flex items-center px-25 py-8">
      <div className="mr-6 flex items-center gap-6">
        <Breadcrumb className="mt-2" aria-label="Breadcrumbs">
          <BreadcrumbItem
            href="/"
            className="[&>a]:text-footer [&>a:hover]:text-footer! [&>svg]:text-black"
          >
            Home
          </BreadcrumbItem>
          <BreadcrumbItem
            href="/shop"
            className="[&>a]:text-footer [&>a:hover]:text-footer! [&>svg]:text-black"
          >
            Shop
          </BreadcrumbItem>

          <BreadcrumbItem className="capitalize [&>span]:font-light [&>span]:text-black [&>svg]:text-black"></BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="border-footer border-l-2 pl-8.5">
        <p>{singleProductData?.title}</p>
      </div>
    </div>
  );
};

export default SingleProductBreadcrumbs;
