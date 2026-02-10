import UsersSection from "./UsersSection";
import SearchSection from "./SearchSection";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

/*
 Option 1:
   ->copy navigation component inside Each Page
 Option 2.
    ->use Layout and an outlet
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<UsersSection />} />
          <Route path="/find" element={<SearchSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<UsersSection />} />
  //       <Route path="/find" element={<SearchSection />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

function Layout() {
  return (
    <div className="">
      <Navigation />
      <Outlet />
      {/* Outlet will be whichever page */}
    </div>
  );
}

export default App;
