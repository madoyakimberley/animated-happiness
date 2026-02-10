import { useState } from "react";
import ColorList from "./ColorList";

import NewColor from "./NewColor";

function Colors() {
  const [colors, setColors] = useState(["blue", "black", "green"]);
  const [activeColor, setActiveColor] = useState("");
  console.log(activeColor);

  return (
    <div style={{ backgroundColor: activeColor }} className=" p-4">
      <NewColor colors={colors} setColors={setColors} />
      <ColorList colors={colors} setActiveColor={setActiveColor} />
    </div>
  );
}

export default Colors;
