import { Filter, ShowGrid, ShowList } from "../../components/Icons";

const ShopResults = ({ productData, startIndex, endIndex }: any) => {
  return (
    <div className="bg-results flex flex-col items-center justify-between gap-4 px-3 py-2 sm:items-start md:items-center md:flex-row lg:h-25 lg:gap-0 lg:px-5 xl:px-25 lg:py-5.5">
      
      <div className="flex items-center text-sm lg:text-base">
        {/* results options */}
        <div className="mr-7.5 flex items-center gap-2 lg:gap-6">
          <div className="flex cursor-pointer items-center gap-3">
            <Filter />
            <p>Filter</p>
          </div>
          <ShowGrid />
          <ShowList />
        </div>

        {/* showing results section */}
        <div className="border-footer border-l-2 pl-8">
          <h2>
            Showing {startIndex + 1}-
            {endIndex > 20
              ? endIndex - (endIndex - productData.length)
              : endIndex}{" "}
            of {productData.length} results
          </h2>
        </div>
      </div>

      {/* show and sort by */}
      <div className="flex items-center gap-4 text-sm lg:gap-7.5 lg:text-lg">
        <div className="flex items-center gap-4">
          <p>Show</p>
          <div className="text-footer flex h-10 w-10 items-center justify-center bg-white lg:h-14 lg:w-14">
            8
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Sort by</p>
          <div className="text-footer flex h-10 w-25 items-center justify-start bg-white pl-2 lg:h-14 lg:w-47 lg:pl-7.5">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopResults;
