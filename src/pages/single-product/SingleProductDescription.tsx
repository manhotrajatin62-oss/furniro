import description1 from "../../assets/single-product/description1.png"
import description2 from "../../assets/single-product/description2.png"

const SingleProductDescription = () => {
  return (
    <div className="text-footer p-5 xl:p-0 border-light-grey xl:h-186 border-t">
      <div className="mx-auto text-xl lg:text-2xl mt-6 xl:mt-12 flex flex-col sm:flex-row xl:w-165 items-center justify-center gap-4 lg:gap-13">
        <h1 className="cursor-pointer font-medium text-black">
          Description
        </h1>
        <h1 className="cursor-pointer">Additional Information</h1>
        <h1 className="cursor-pointer">Reviews [5]</h1>
      </div>

      <div className="mt-9 mx-auto text-sm xl:text-base text-justify lg:w-4xl xl:h-43 xl:w-5xl">
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

      <div className="mt-9 mx-auto justify-center xl:w-309 xl:h-87 flex-col xl:flex-row flex items-center gap-7">

            <img draggable={false} src={description1} alt="description" />
            <img draggable={false} src={description2} alt="description" />
      </div>
    </div>
  );
};

export default SingleProductDescription;
