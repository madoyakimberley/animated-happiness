function StateNumber() {
  return (
    <div className=" p-4 ">
      <button
        className=" m-2 rounded-full  shadow-md bg-red-600 text-white  font-bold active:opacity-50 cursor-pointer"
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        -
      </button>
      <span>1</span>
      <button
        className=" m-2 rounded-full  shadow-md  bg-blue-600 text-white  font-bold active:opacity-50 cursor-pointer"
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        +
      </button>
    </div>
  );
}

export default StateNumber;
