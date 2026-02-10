import Login from "./Login";
import Dashboard from "./DashBoard";
import About from "./DashBoard/About";
import Colors from "./DashBoard/Colors";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function NavProject() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Outlet */}
          <Route path="" element={<About />} />
          <Route path="color/:color_id" element={<Colors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavProject;
