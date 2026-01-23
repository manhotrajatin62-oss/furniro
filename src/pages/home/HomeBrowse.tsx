import browse1 from "../../assets/home/browse1.png";
import browse2 from "../../assets/home/browse2.png";
import browse3 from "../../assets/home/browse3.png";

const HomeBrowse = () => {
  const browseArr = [
    {
      title: "Dining",
      image: browse1,
    },
    {
      title: "Living",
      image: browse2,
    },
    {
      title: "Bedroom",
      image: browse3,
    },
  ];

  return (
    <section className="mx-auto mt-14 flex w-[90%] flex-col xl:w-[85%]">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-font text-2xl font-bold lg:text-3xl">
          Browse The Range
        </h1>
        <p className="text-light-font mt-1 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* images container */}
      <div className="mx-auto mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 xl:max-w-400">
        {browseArr?.map((item) => {
          return (
            <div key={item?.title}>
              <div className="overflow-hidden rounded-lg lg:h-120 xl:w-90">
                <img
                  draggable={false}
                  className="h-full w-full"
                  src={item?.image}
                  alt="browse"
                />
              </div>

              <h2 className="text-font mt-7 text-center text-base font-bold lg:text-lg">
                {item?.title}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeBrowse;
