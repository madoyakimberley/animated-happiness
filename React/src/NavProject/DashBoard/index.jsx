import About from "./About";
import Colors from "./Colors";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <SideBar />
      <div className=" mx-2 w-full">
        {/* <About />
        <Colors /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
