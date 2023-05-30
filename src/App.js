import React from "react";
import { Link, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  const location = useLocation();
  console.log(location);
  return <AllRoutes></AllRoutes>;
};

export default App;
