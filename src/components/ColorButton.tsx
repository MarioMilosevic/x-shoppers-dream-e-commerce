const ColorButton = ({ button, isActive, clickHandler }: { button: string }) => {

  const isActiveOptions = {
    true: "opacity-100",
    false:"opacity-50"
  }

  return (
    <button
      className={`w-3 h-3 rounded-full ${isActiveOptions[isActive]}`}
      style={{ backgroundColor: `${button}` }}
      onClick={(e) => clickHandler(e,button)}
    ></button>
  );
};

export default ColorButton;
