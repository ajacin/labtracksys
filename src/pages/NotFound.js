import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      Page Not found. Go back to{" "}
      <Link to="/" element={<Home></Home>}>
        Home page
      </Link>{" "}
      or
      <button
        className="p-1 border m-2 border-slate-600 text-black"
        onClick={() => navigate("/", { state: "from not found page" })}
      >
        Tests
      </button>
    </div>
  );
}

export default NotFound;
