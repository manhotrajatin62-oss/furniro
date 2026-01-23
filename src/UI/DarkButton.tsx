const DarkButton = ({ text }: any) => {
  return (
    <button className="bg-dark-orange w-fit cursor-pointer p-4 text-sm font-bold text-white lg:px-12 lg:py-5 lg:text-base">
      {text}
    </button>
  );
};

export default DarkButton;
