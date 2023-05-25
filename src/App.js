import React from "react";
import { Link, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav className="border border-slate-900 bg-slate-300 ">
        <ul>
          <li>
            <Link to={"/lab"} state="state to lab">
              Lab
            </Link>
          </li>
          <li>
            <Link to={"/tests"}>Tests</Link>
          </li>
        </ul>
      </nav>
      <AllRoutes></AllRoutes>
    </>
  );
};

export default App;
