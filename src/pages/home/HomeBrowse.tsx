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
    <section className="mx-auto mt-14 flex w-[85%] flex-col">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-font text-3xl font-black">Browse The Range</h1>
        <p className="text-light-font mt-1 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* images container */}
      <div className="mt-14 max-w-400 mx-auto grid grid-cols-3 gap-5">
        {browseArr?.map((item) => {
          return (
            <div key={item?.title}>
              <div className="h-120 w-90 overflow-hidden rounded-lg">
                <img
                  draggable={false}
                  className="h-full w-full"
                  src={item?.image}
                  alt="browse"
                />
              </div>

              <h2 className="text-font mt-7 text-center text-lg font-bold">
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
