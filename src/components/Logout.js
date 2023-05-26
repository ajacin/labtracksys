import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unAuthenticate } from "../features/authentication/authenticationSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = useSelector((state) => state.authentication.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("logout useeffect");
    dispatch(unAuthenticate());
    navigate("/login");
    console.log("end of");
  }, []);

  return <div>Logout</div>;
};

export default Logout;
