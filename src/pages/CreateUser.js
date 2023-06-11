import React, { useState } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("USER");

  const auth = useSelector((state) => state.authentication.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = {
      username,
      email,
      password,
      firstName,
      lastName,
      role,
    };

    // Send user data to the server using fetch
    fetch(process.env.REACT_APP_API_URL + "/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.token,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created:", data);
        toast.success("User created!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        // Reset form fields after successful submission
        setUsername("");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setRole("USER");
      })
      .catch((error) => {
        toast.error("User creation failed!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          theme: "colored",
        });
        console.error("Error creating user:", error);
      });
  };

  return (
    <>
      <PageLayout>
        <div className="w-screen p-4">
          <h2 className="text-2xl font-semibold mb-4">CREATE A USER</h2>
          <form onSubmit={handleSubmit} className="flex gap-1 flex-wrap">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="username"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="password"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="firstName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="role"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Role
              </label>
              <select
                id="role"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="SUPERUSER">SUPERUSER</option>
              </select>
            </div>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Button type="submit" text="Create"></Button>
            </div>
          </form>
        </div>
      </PageLayout>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CreateUser;
