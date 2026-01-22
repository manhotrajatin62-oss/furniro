const Loader = () => {
  return (
    <section className="mx-auto flex h-100  w-full flex-col items-center justify-center gap-10">
      <div className="border-t-dark-orange border-light-orange w-30 h-30 lg:h-70 lg:w-70 animate-spin rounded-full border-8" />

      <h1 className="text-xl lg:text-3xl">Data is being Fetched</h1>
    </section>
  );
};

export default Loader;
