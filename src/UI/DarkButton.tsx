const DarkButton = ({text}:any) => {
  return (
    <button className="bg-dark-orange w-fit cursor-pointer px-12 py-5 font-bold text-white">
      {text}
    </button>
  );
};

export default DarkButton;
