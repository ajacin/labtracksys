import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated } from "../features/authentication/authenticationSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const authData = useSelector((state) => state.authentication.auth);
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setUserName(e.target.value);
  };
  const navigate = useNavigate();

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
    <div className="min-h-screen flex items-center justify-center md:bg-gradient-to-r md:from-cyan-700 md:to-blue-700">
      <div className="max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white md:rounded-lg md:shadow-lg p-8 flex justify-center flex-col"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 self-center md:self-start">
            KARUNYA LABORATORY
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
            <button
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-slate-700 hover:text-slate-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
