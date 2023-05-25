import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const loc = useLocation();
  const [location, setLocation] = useState(useLocation());
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication.authentication);
  useEffect(() => {
    if (auth.message !== "authenticated") navigate("/login");
  }, []);

  return (
    <>
      <div>Home</div>
      <p>this page is protected for {auth.userDetails.username}</p>
    </>
  );
}

export default Home;
