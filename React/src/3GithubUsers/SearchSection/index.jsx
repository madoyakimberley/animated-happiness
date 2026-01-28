import { useState } from "react";
import axios from "axios";
import FoundUser from "./FoundUser";
import Message from "./Message";

function SearchSection({ page }) {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null); //no value // {}
  const [message, setMessage] = useState(null);

  if (page !== "find") {
    return null;
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = async () => {
    try {
      if (value <= 4) {
        return;
      }

      let response = await axios({
        method: "GET",
        url: `https://api.github.com/users/${value.trim()}`,
      });

      console.log(response);
      const data = response.data;
      setUser(data);
      setMessage(null);
    } catch (e) {
      console.log("Error searching ");
      console.log(e);
      console.log(e.response);
      setUser(null);
      setMessage(`Username ${value} not found`);
    }
  };

  return (
    <div>
      <div className=" flex justify-center my-4">
        <div className=" flex items-center">
          <input className=" py-0.5 mx-2 border" onChange={handleChange} />
          <button
            onClick={handleSearch}
            className=" rounded-md px-2 py-1 text-white bg-blue-500 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <Message message={message} />
      <FoundUser user={user} />
    </div>
  );
}

export default SearchSection;
