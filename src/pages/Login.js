import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated } from "../features/authentication/authenticationSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.authentication.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.message === "authenticated") {
      navigate("/");
    }
  }, [auth.message, navigate]);

  const handleEmailChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(username);
      console.log(password);
      const response = await fetch(process.env.REACT_APP_API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        console.log("Login successful");
        dispatch(updateAuthenticated(data));
        navigate("/");
      } else {
        // Failed login
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-hero bg-no-repeat sm:bg-primary items-center justify-between w-full ">
      <div className="grow-0"></div>
      <div className="flex grow-1 ">
        <div className="max-w-md w-full">
          <form
            onSubmit={handleSubmit}
            className=" bg-white md:rounded-lg shadow-lg shadow-dark p-8 flex justify-center flex-col w-full"
          >
            <h2 className=" text-2xl font-semibold text-gray-800 mb-6 self-center md:self-start">
              {process.env.REACT_APP_LABORATORY_NAME}
            </h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                User Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lowercase"
                id="username"
                type="text"
                value={username}
                onChange={handleEmailChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                text="Sign In"
                variant={"secondary"}
              ></Button>
              <p className="inline-block align-baseline font-bold text-sm text-slate-700 hover:text-slate-600">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
      <a href="https://storyset.com/work" className="text-xs opacity-20">
        Work illustrations by Storyset
      </a>
    </div>
  );
};

export default Login;
