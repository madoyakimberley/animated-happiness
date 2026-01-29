function SingleUser() {
  const user = {
    login: "evanphx",
    id: 7,
    node_id: "MDQ6VXNlcjc=",
    avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/evanphx",
    html_url: "https://github.com/evanphx",
    followers_url: "https://api.github.com/users/evanphx/followers",
    following_url:
      "https://api.github.com/users/evanphx/following{/other_user}",
    gists_url: "https://api.github.com/users/evanphx/gists{/gist_id}",
    starred_url: "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/evanphx/subscriptions",
    organizations_url: "https://api.github.com/users/evanphx/orgs",
    repos_url: "https://api.github.com/users/evanphx/repos",
    events_url: "https://api.github.com/users/evanphx/events{/privacy}",
    received_events_url: "https://api.github.com/users/evanphx/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
  };

  /*
  Before you display data
   ensure you can read the data
  */
  //   console.log(user);
  //   //Full user object
  //   console.log(user.avatar_url);
  //   console.log(user.login);
  return (
    <div>
      <div>
        <img src={user.avatar_url} />
      </div>
      <ul>
        <li>
          Name <b>{user.login}</b>
        </li>
        <li>
          Url <b>{user.url}</b>
        </li>
      </ul>
    </div>
  );
}

export default SingleUser;
