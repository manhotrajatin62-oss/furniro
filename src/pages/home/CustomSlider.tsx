import { useState } from "react";
import slider1 from "../../assets/home/slider1.png";
import slider2 from "../../assets/home/slider2.png";
import slider3 from "../../assets/home/slider3.png";
import { RightArrow, SliderArrow } from "../../components/Icons";

const CustomSlider = () => {
  const images = [slider1, slider2, slider3];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next");

  const total = images.length;

  const nextIndex = (active + 1) % total;
  const prevIndex = (active - 1 + total) % total;

  const goNext = () => {
    setDirection("next");
    setActive(nextIndex);
  };

  const goPrev = () => {
    setDirection("prev");
    setActive(prevIndex);
  };

  const goTo = (index: any) => {
    setDirection(index > active ? "next" : "prev");
    setActive(index);
  };

  return (
    <section className="relative my-11 flex items-center gap-6 overflow-hidden">
      {/* left button */}
      <div
        onClick={goPrev}
        className="absolute top-[50%] left-5 z-99 flex h-12 w-12 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-gray-400"
      >
        <SliderArrow left />
      </div>

      {/* image slider container */}
      <div className="flex items-start gap-6 overflow-hidden">
        {/* active slide */}
        <div
          key={active}
          className={`relative h-145 min-w-87 transition-all duration-500 ease-out`}
        >
          <img
            draggable={false}
            src={images[active]}
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-10 left-6 flex items-end">
            <div className="bg-white/72 p-7 backdrop-blur-[3px]">
              <p className="text-grey2 flex items-center gap-2 text-sm">
                {"0" + (active + 1)}{" "}
                <svg
                  width="27"
                  height="1"
                  viewBox="0 0 27 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H27" stroke="#616161" />
                </svg>{" "}
                {active == 0
                  ? "Bed Room"
                  : active == 1
                    ? "Kitchen"
                    : "Living Room"}
              </p>
              <h2 className="text-grey1 text-2xl font-semibold">Inner Peace</h2>
            </div>

            <button className="bg-dark-orange flex h-12 w-12 cursor-pointer items-center justify-center">
              <RightArrow />
            </button>
          </div>
        </div>

        {/* second slide */}
        <div className="h-121 min-w-87 transition-all duration-500 ease-out">
          <img
            draggable={false}
            src={images[nextIndex]}
            className="h-full w-full object-cover"
          />

          {/* pagination under second slide */}
          <div className="mt-10 flex items-center justify-start gap-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`cursor-pointer rounded-full transition ${i === active ? "bg-transparent" : "bg-grey5 h-3 w-3"} `}
              >
                {i === active && (
                  <div className="border-dark-orange flex h-5 w-5 items-center justify-center rounded-full border-2">
                    <div className="bg-dark-orange h-2.5 w-2.5 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* third slide */}
        <div className="h-121 w-full transition-all duration-500 ease-out">
          <img
            draggable={false}
            src={images[(nextIndex + 1) % images.length]}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* right button */}
      <div
        onClick={goNext}
        className="absolute top-[50%] right-12 z-99 flex h-12 w-12 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-gray-400"
      >
        <SliderArrow />
      </div>
    </section>
  );
};

export default CustomSlider;
