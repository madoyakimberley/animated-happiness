import { useState } from "react";

//form
function NewColor({ colors, setColors }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const addColor = () => {
    console.log("add color btn click");
    let newColors = [...colors]; // [...colors] structureClone(colors)
    console.log("ne Colors", newColors);
    newColors.push(value);
    //newCololors=["magenta","brown","green"]
    //console.log(newColors);
    setColors(newColors);
    setValue("");
  };

  return (
    <div className=" flex">
      <input value={value} className=" border" onChange={handleChange} />
      <button
        onClick={addColor}
        className=" py-0.5 px-2 rounded-md bg-blue-500 text-white active:opacity-50 shadow-md"
      >
        Add
      </button>
    </div>
  );
}

export default NewColor;
