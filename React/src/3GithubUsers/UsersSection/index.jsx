import SingleUserV2 from "./SingleUserV2";
import users from "./../users.json";

// users is an array
//loop -> for loops
//map method ->

function UsersSection() {
  function toMap(item, index) {
    return (
      <SingleUserV2
        key={item.id}
        avatar_url={item.avatar_url}
        url={item.html_url}
        login={item.login}
      />
    );
  }

  return <div className=" flex flex-wrap">{users.map(toMap)}</div>;
}

export default UsersSection;
