const DarkButton = ({text}:any) => {
  return (
    <button className="bg-dark-orange w-fit text-sm lg:text-base cursor-pointer p-4 lg:px-12 lg:py-5 font-bold text-white">
      {text}
    </button>
  );
};

export default DarkButton;
