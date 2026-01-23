import furn1 from "../../assets/home/furn1.png";
import furn2 from "../../assets/home/furn2.png";
import furn3 from "../../assets/home/furn3.png";
import furn4 from "../../assets/home/furn4.png";
import furn5 from "../../assets/home/furn5.png";
import furn6 from "../../assets/home/furn6.png";
import furn7 from "../../assets/home/furn7.png";
import furn8 from "../../assets/home/furn8.png";
import furn9 from "../../assets/home/furn9.png";

const HomeFurniture = () => {
  return (
    <section className="mt-17 mb-12 flex flex-col items-center px-4 lg:px-0">
      {/* heading */}
      <div className="text-center">
        <h2 className="text-grey2 text-sm font-semibold lg:text-base">
          Share your setup with
        </h2>
        <h1 className="text-grey1 mt-2 text-2xl font-bold lg:text-4xl">
          #FuniroFurniture
        </h1>
      </div>

      {/* images layout */}
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row lg:-mt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-end gap-4">
            <img
              draggable={false}
              className="w-[15%]"
              src={furn1}
              alt="#FuniroFurniture"
            />
            <img
              draggable={false}
              className="w-[80%]"
              src={furn2}
              alt="#FuniroFurniture"
            />
          </div>
          <div className="flex items-start justify-end gap-4">
            <img
              draggable={false}
              className="w-[30%]"
              src={furn3}
              alt="#FuniroFurniture"
            />
            <img
              draggable={false}
              className="w-[65%]"
              src={furn4}
              alt="#FuniroFurniture"
            />
          </div>
        </div>

        <div>
          <img
            draggable={false}
            className="w-full"
            src={furn5}
            alt="#FuniroFurniture"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <img
              draggable={false}
              className="w-[50%]"
              src={furn6}
              alt="#FuniroFurniture"
            />
            <img
              draggable={false}
              className="w-[45%]"
              src={furn7}
              alt="#FuniroFurniture"
            />
          </div>
          <div className="flex items-start gap-4">
            <img
              draggable={false}
              className="w-[30%]"
              src={furn8}
              alt="#FuniroFurniture"
            />
            <img
              draggable={false}
              className="w-[50%]"
              src={furn9}
              alt="#FuniroFurniture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFurniture;
