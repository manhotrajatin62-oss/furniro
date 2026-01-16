const HomeCard = () => {
  return (
    <section className="bg-img relative h-200 w-full">
      <div className="bg-light-orange absolute right-14 bottom-22 w-150 rounded-lg">
        <div className="flex flex-col gap-1 px-10 pt-15 pb-9">
          <h3 className="text-font font-semibold">New Arrival</h3>
          <h1 className="text-dark-orange text-5xl font-black">
            Discover Our <br />
            New Collection
          </h1>
          <p className="text-font py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-dark-orange mt-10 w-fit cursor-pointer px-12 py-5 font-bold text-white">
            BUY Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
