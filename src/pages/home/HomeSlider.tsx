import DarkButton from "../../UI/DarkButton";
import CustomSlider from "./CustomSlider";

const HomeSlider = () => {
  return (
    <section className="bg-slider px-4 lg:px-0 pt-10 lg:pt-0 mt-17 flex flex-col lg:flex-row lg:h-167 items-center lg:gap-10">

      {/* inspiration section */}
      <div className="lg:ml-15 flex lg:w-80 xl:max-w-100 flex-col gap-6">
        <div>
          <h1 className="text-grey1 text-2xl lg:text-3xl xl:text-4xl font-black">
            50+ Beautiful rooms <br />
            inspiration
          </h1>
          <p className="text-grey2 lg:text-base text-sm mt-2">
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
