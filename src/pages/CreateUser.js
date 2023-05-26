import React, { useState } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import { useSelector } from "react-redux";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        // Reset form fields after successful submission
        setUsername("");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <PageLayout>
      <div className="max-w-lg mx-auto">
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
            <label htmlFor="email" className="block font-medium text-gray-700">
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
          <div className="text-right">
            <button
              type="submit"
              className="text-white rounded-md py-2 px-4 font-medium bg-primary hover:bg-secondary hover:text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default CreateUser;
