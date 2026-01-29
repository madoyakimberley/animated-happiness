import { useState } from "react";

function StateNumber() {
  const [n, setN] = useState(0); //call it returns an array []
  //useState() ->[currentState,UpdateState:<set>]

  const increment = () => {
    console.log("Increment pressed");
    let newV = n + 1;
    setN(newV);
  };
  const decrement = () => {
    console.log("Decrement Pressed");
    let newV = n - 1;
    setN(newV);
  };

  return (
    <div className=" p-4 ">
      <Button txt={"-"} color="red" actionFunc={decrement} />
      <span>{n}</span>
      <Button txt={"+"} color="blue" actionFunc={increment} />
    </div>
  );
}

//DRY -> D not repeat

function Button(props) {
  const { txt, color, actionFunc } = props;

  return (
    <button
      className=" m-2 rounded-full  shadow-md   text-white  font-bold active:opacity-50 cursor-pointer"
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: color,
      }}
      onClick={actionFunc}
    >
      {txt}
    </button>
  );
}

export default StateNumber;
