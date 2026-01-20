const LightButton = ({onClick, children}:any) => {
  return (
    <button onClick={onClick} className="text-dark-orange border-dark-orange cursor-pointer border px-18 py-3 font-bold">
     {children}
    </button>
  );
};

export default LightButton;
