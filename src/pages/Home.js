import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const loc = useLocation();
  const [location, setLocation] = useState(useLocation());
  return (
    <>
      <div>Home</div>
      <p>note: to be fixed:{loc.state}</p>
    </>
  );
}

export default Home;
