import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar";

function App() {
  return (
    <div className="flex">
      <aside className="w-auto bg-white h-screen">
        <NavBar />
      </aside>

      <main
        role="main"
        className="w-screen text-center h-screen overflow-scroll"
      >
        <div className="h-5/6">
          <Outlet />
        </div>

        <div className="h-1/6">
          <BottomNavBar />
        </div>
      </main>
    </div>
  );
}

export default App;
