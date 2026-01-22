const LightButton = ({onClick, children}:any) => {
  return (
    <button onClick={onClick} className="text-dark-orange border-dark-orange cursor-pointer border lg:px-18 lg:py-3 text-sm lg:text-base py-3 px-6 font-bold">
     {children}
    </button>
  );
};

export default LightButton;
