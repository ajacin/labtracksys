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
    fetch("http://localhost:4000/users/create", {
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
        <div className="max-w-lg mx-auto p-2">
          <h2 className="text-2xl font-semibold mb-4">Create a New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="SUPERUSER">SUPERUSER</option>
              </select>
            </div>
            <div className="text-right">
              <Button type="submit" text="Create User"></Button>
            </div>
          </form>
        </div>
      </PageLayout>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CreateUser;
