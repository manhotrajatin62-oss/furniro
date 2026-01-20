import { Search } from "../../components/Icons";
import BlogPosts from "./BlogPosts";
import BlogSection from "./BlogSection";

const BlogContent = () => {
  return (
    <section className="flex flex-col items-center gap-13">
      <div className="mx-20 mt-26 flex items-start gap-8">
        {/* blog section */}
        <BlogSection />

        <div className="flex w-98 flex-col gap-10">
          {/* categories */}
          <div>
            <div className="input mx-10 mt-6 flex h-14 items-center">
              <input
                type="search"
                className="h-full w-full outline-0"
                name="search"
                id="search"
                autoComplete="on"
              />
              <Search />
            </div>

            <div className="mt-11 mr-16 mb-15 ml-19 flex flex-col gap-10">
              <h1 className="text-2xl font-medium">Categories</h1>

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

      <div className="mb-14 flex items-center gap-9">
        <button className="grid-btn bg-dark-orange text-white">1</button>
        <button className="grid-btn">2</button>
        <button className="grid-btn">3</button>
        <button className="grid-btn w-24">Next</button>
      </div>
    </section>
  );
};

export default BlogContent;
