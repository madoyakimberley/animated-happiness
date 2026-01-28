import UsersSection from "./UsersSection";
import SearchSection from "./SearchSection";
import Navigation from "./Navigation/idex";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("users");

  return (
    <div>
      <Navigation setPage={setPage} />
      <SearchSection page={page} />
      <UsersSection page={page} />
    </div>
  );
}

export default App;
