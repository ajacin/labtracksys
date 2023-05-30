import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";

const SelectedUser = ({ selectedUser = [], onDelete }) => {
  //   const [username, setUsername] = useState(selectedUser?.username);
  //   const [email, setEmail] = useState(selectedUser?.email);
  //   //   const [password, setPassword] = useState(password);
  //   const [firstName, setFirstName] = useState(selectedUser?.firstName);
  //   const [lastName, setLastName] = useState(selectedUser?.lastName);
  //   const [role, setRole] = useState(selectedUser?.role);

  const [formData, setFormData] = useState(selectedUser);

  const auth = useSelector((state) => state.authentication.auth);

  useEffect(() => {
    // setUsername(selectedUser?.username);
    // setEmail(selectedUser?.email);
    // // setPassword("");
    // setFirstName(selectedUser?.firstName);
    // setLastName(selectedUser?.lastName);
    // setRole(selectedUser?.role);
    setFormData(selectedUser);
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    // const user = {
    //   username,
    //   email,
    //   //   password,
    //   firstName,
    //   lastName,
    //   role,
    // };

    // Send user data to the server using fetch
    fetch(process.env.REACT_APP_API_URL + "/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.token,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created:", data);
        toast.success("User created!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        // Reset form fields after successful submission
        // setUsername("");
        // setEmail("");
        // // setPassword("");
        // setFirstName("");
        // setLastName("");
        // setRole("USER");
        setFormData([]);
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
    <div className=" w-full md:w-96 p-1 m-1">
      {/* <h2 className="text-2xl font-semibold mb-4">Create a New User</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.username}
            onChange={(e) =>
              setFormData((old) => {
                return { ...formData, username: e.target.value };
              })
            }
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
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.email}
            onChange={(e) =>
              setFormData((old) => {
                return { ...formData, email: e.target.value };
              })
            }
            required
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}
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
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((old) => {
                return { ...formData, firstName: e.target.value };
              })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((old) => {
                return { ...formData, lastName: e.target.value };
              })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            className="w-full border border-dark rounded-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            value={formData.role}
            onChange={(e) =>
              setFormData((old) => {
                return { ...formData, role: e.target.value };
              })
            }
            required
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="SUPERUSER">SUPERUSER</option>
          </select>
        </div>
        <div className="text-right">
          <Button type="submit" text="Update User"></Button>
        </div>
      </form>
      <div class=" flex items-center text-base font-semibold text-secondary dark:text-white">
        {selectedUser?.role !== "SUPERUSER" && (
          <div className="flex flex-row gap-2 items-between my-2 mx-auto">
            <Button
              text="Delete"
              primary
              onButtonClick={() => onDelete(selectedUser?.id)}
            ></Button>
            <Button text="Disable" primary></Button>
            <Button text="Action"></Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedUser;
