import DarkButton from "../../UI/DarkButton";

const HomeCard = () => {
  return (
    <section className="bg-img relative h-180 w-full bg-center lg:h-200 lg:bg-top">
      <div className="bg-light-orange absolute right-[50%] bottom-[35%] w-[90%] translate-[50%] rounded-lg sm:right-10 sm:bottom-15 sm:w-100 sm:translate-0 lg:right-14 lg:bottom-22 lg:w-140">
        <div className="flex flex-col gap-1 p-5 sm:px-10 sm:pt-15 sm:pb-9">
          <h3 className="text-font font-semibold">New Arrival</h3>
          <h1 className="text-dark-orange text-2xl font-black lg:text-5xl">
            Discover Our <br className="hidden sm:block" />
            New Collection
          </h1>
          <p className="text-font pt-3 pb-4 text-xs sm:pb-10 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <DarkButton text={"BUY NOW"} />
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
