import SingleUserV2 from "../UsersSection/SingleUserV2";

function FoundUser(props) {
  const { user } = props;

  if (!user) {
    return null;
  }

  return (
    <div>
      <SingleUserV2
        avatar_url={user.avatar_url}
        login={user.login}
        url={user.html_url}
        key={user.id}
      />
    </div>
  );
}

export default FoundUser;
