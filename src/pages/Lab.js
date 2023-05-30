import React from "react";
import { useLocation } from "react-router-dom";

function Lab() {
  const location = useLocation();
  return <div>Lab {location.state}</div>;
}

export default Lab;
