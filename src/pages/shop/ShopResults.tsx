import { Filter, ShowGrid, ShowList } from "../../components/Icons";

const ShopResults = ({ productData, startIndex, endIndex }: any) => {
  return (
    <div className="bg-results flex h-25 items-center justify-between px-25 py-5.5">
      <div className="flex items-center">
        {/* results options */}
        <div className="mr-7.5 flex items-center gap-6">
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
            Showing {startIndex + 1}-{endIndex > 20 ? endIndex - (endIndex - productData.length) : endIndex}{" "}
            of {productData.length} results
          </h2>
        </div>
      </div>

      {/* show and sort by */}
      <div className="flex items-center gap-7.5">
        <div className="flex items-center gap-4">
          <p>Show</p>
          <div className="text-footer flex h-14 w-14 items-center justify-center bg-white text-lg">
            8
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Sort by</p>
          <div className="text-footer flex h-14 w-47 items-center justify-start bg-white pl-7.5 text-lg">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopResults;
