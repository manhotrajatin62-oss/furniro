import description1 from "../../assets/single-product/description1.png";
import description2 from "../../assets/single-product/description2.png";

const SingleProductDescription = () => {
  return (
    <div className="text-footer border-light-grey border-t p-5 xl:h-186 xl:p-0">
      <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row lg:gap-13 lg:text-2xl xl:mt-12 xl:w-165">
        <h1 className="cursor-pointer font-medium text-black">Description</h1>
        <h1 className="cursor-pointer">Additional Information</h1>
        <h1 className="cursor-pointer">Reviews [5]</h1>
      </div>

      <div className="mx-auto mt-9 text-justify text-sm lg:w-4xl xl:h-43 xl:w-5xl xl:text-base">
        <p>
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>

        <p className="mt-8">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="mx-auto mt-9 flex flex-col items-center justify-center gap-7 xl:h-87 xl:w-309 xl:flex-row">
        <img draggable={false} src={description1} alt="description" />
        <img draggable={false} src={description2} alt="description" />
      </div>
    </div>
  );
};

export default SingleProductDescription;
