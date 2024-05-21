const ColorButton = ({ button, isActive }: { button: string }) => {
  return (
    <button
      className="w-3 h-3 rounded-full opacity-50"
      style={{ backgroundColor: `${button}` }}
    ></button>
  );
};

export default ColorButton;
