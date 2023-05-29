import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/router-layouts/PageLayout";

function Home() {
  const loc = useLocation();
  const [location, setLocation] = useState(useLocation());
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication.auth);

  return (
    <>
      <PageLayout>
        <div>Home content</div>
      </PageLayout>
    </>
  );
}

export default Home;
