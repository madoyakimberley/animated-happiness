function ColorList({ colors, setActiveColor }) {
  const handleClick = (btnColor) => {};

  const singleColor = (color, index) => {
    return (
      <button
        key={index}
        className=" rounded-md px-2 py-0.5 cursor-pointer active:opacity-50 shadow-md text-3xl font-bold text-white"
        style={{ height: "50px", backgroundColor: color }}
        onClick={() => {
          setActiveColor(color);
        }}
      >
        {color}
      </button>
    );
  };
  return (
    <div className=" flex flex-row gap-x-1 flex-wrap m-2">
      {colors.map(singleColor)}
    </div>
  );
}

export default ColorList;
