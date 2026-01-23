import { Search } from "../../components/Icons";
import BlogPosts from "./BlogPosts";
import BlogSection from "./BlogSection";

const BlogContent = () => {
  return (
    <section className="flex flex-col items-center gap-13 p-5 xl:p-0">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:mt-26 xl:mx-20">
        {/* blog section */}
        <BlogSection />

        <div className="flex flex-col gap-10 xl:w-98">
          {/* categories */}
          <div>
            <div className="input mx-5 mt-6 flex h-10 items-center sm:mx-10 sm:h-14 md:mx-5">
              <input
                type="search"
                className="h-full w-full outline-0"
                name="search"
                id="search"
                autoComplete="on"
              />
              <Search blog />
            </div>

            <div className="m-5 flex flex-col gap-10 sm:mt-11 sm:mr-16 sm:mb-15 sm:ml-19 md:m-10">
              <h1 className="text-xl font-medium sm:text-2xl">Categories</h1>

              <p className="text-footer flex w-full items-center justify-between">
                Crafts<span>2</span>
              </p>
              <p className="text-footer flex w-full items-center justify-between">
                Design<span>8</span>
              </p>
              <p className="text-footer flex w-full items-center justify-between">
                Handmade<span>7</span>
              </p>
              <p className="text-footer flex w-full items-center justify-between">
                Interior<span>1</span>
              </p>
              <p className="text-footer flex w-full items-center justify-between">
                Wood<span>6</span>
              </p>
            </div>
          </div>

          {/*  recent post */}
          <BlogPosts />
        </div>
      </div>

      <div className="mb-14 flex items-center gap-4 lg:gap-9">
        <button className="grid-btn bg-dark-orange text-white">1</button>
        <button className="grid-btn">2</button>
        <button className="grid-btn">3</button>
        <button className="grid-btn w-24">Next</button>
      </div>
    </section>
  );
};

export default BlogContent;
