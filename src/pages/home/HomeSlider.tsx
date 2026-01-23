import DarkButton from "../../UI/DarkButton";
import CustomSlider from "./CustomSlider";

const HomeSlider = () => {
  return (
    <section className="bg-slider mt-17 flex flex-col items-center px-4 pt-10 lg:h-167 lg:flex-row lg:gap-10 lg:px-0 lg:pt-0">
      {/* inspiration section */}
      <div className="flex flex-col gap-6 lg:ml-15 lg:w-80 xl:max-w-100">
        <div>
          <h1 className="text-grey1 text-2xl font-black lg:text-3xl xl:text-4xl">
            50+ Beautiful rooms <br />
            inspiration
          </h1>
          <p className="text-grey2 mt-2 text-sm lg:text-base">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>
        <DarkButton text={"Explore More"} />
      </div>

      {/* image slider section */}
      <CustomSlider />
    </section>
  );
};

export default HomeSlider;
