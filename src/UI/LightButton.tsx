const LightButton = ({ onClick, children }: any) => {
  return (
    <button
      onClick={onClick}
      className="text-dark-orange border-dark-orange cursor-pointer border px-6 py-3 text-sm font-bold lg:px-18 lg:py-3 lg:text-base"
    >
      {children}
    </button>
  );
};

export default LightButton;
