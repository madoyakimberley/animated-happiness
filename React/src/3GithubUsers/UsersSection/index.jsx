import SingleUserV2 from "./SingleUserV2";
import axios from "axios";
import { useEffect, useState } from "react";

function UsersSection({ page }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      let response = await axios({
        url: "https://api.github.com/users",
        method: "GET",
      });
      //console.log(response);
      const data = response.data;
      console.log("The data is", data);
      setUsers(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      console.log("Error fetching github users");
      alert("Failed to get github users. Try again latter");
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    // getUsers();
    /*
     you can use set timeout to simulate slow internet connection
     
    */
    setTimeout(() => {
      getUsers();
    }, 3000);
  }, []);

  if (page !== "users") {
    return null;
  }

  if (loading === true) {
    return (
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className=" animate-pulse text-4xl opacity-30">Loading</div>
      </div>
    );
  }
  return (
    <div className=" flex flex-wrap">
      {users.map((user, index) => (
        <SingleUserV2
          avatar_url={user.avatar_url}
          login={user.login}
          url={user.url}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UsersSection;
