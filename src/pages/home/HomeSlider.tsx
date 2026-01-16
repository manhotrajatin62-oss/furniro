import DarkButton from "../../UI/DarkButton";
import CustomSlider from "./CustomSlider";

const HomeSlider = () => {
  return (
    <section className="bg-slider mt-17 flex h-167 items-center gap-10">

      {/* inspiration section */}
      <div className="ml-15 flex max-w-100 flex-col gap-6">
        <div>
          <h1 className="text-grey1 text-4xl font-black">
            50+ Beautiful rooms <br />
            inspiration
          </h1>
          <p className="text-grey2 mt-2">
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
