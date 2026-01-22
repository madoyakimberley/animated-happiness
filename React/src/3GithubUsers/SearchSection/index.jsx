//State ->
//Html update the dom at runtime
//STATE is ->

function SearchSection() {
  console.log("Seach Section rendered");
  console.log("State forces a render of all components using the state");

  let searchValue = "This is search value";
  const userInput = (e) => {
    console.log(e);
    const value = e.target.value;
    //console.log("Input value is", value);
    searchValue = e.target.value;
    console.log("search value is", searchValue);
  };

  return (
    <div>
      <div className=" flex justify-center my-4">
        <div className=" flex items-center">
          <input className=" py-0.5 px-2 border" onChange={userInput} />
          <button className=" rounded px-2 py-1 text-white bg-blue-500 cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div>{searchValue}</div>
    </div>
  );
}

export default SearchSection;
