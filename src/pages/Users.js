import React, { useState, useEffect } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import UserList from "../components/UserList";
import { useSelector } from "react-redux";
import { async } from "q";

const Users = () => {
  const [users, setUsers] = useState([]);
  const auth = useSelector((state) => state.authentication.auth);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.token,
        },
        //   body: JSON.stringify({
        //     role: "USER",
        //   }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUsers(userData?.data);
      } else {
        // Handle error response
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching users:", error);
    }
  };
  const handleEdit = (userId) => {
    // Handle edit action
    console.log(`Editing user with ID ${userId}`);
  };

  const handleDelete = async (userId) => {
    // Handle delete action
    console.log(`Deleting user with ID ${userId}`);
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.token,
        },
        //   body: JSON.stringify({
        //     role: "USER",
        //   }),
      });

      if (response.ok) {
        console.log("deleted user");
        fetchUsers();
      } else {
        // Handle error response
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching users:", error);
    }
  };

  const handleDisable = (userId) => {
    // Handle disable action
    console.log(`Disabling user with ID ${userId}`);
  };

  return (
    <PageLayout>
      <div className="flex flex-col p-2 gap-1 flex-grow">
        <div className="border border-gray-300 mx-2">[Search users ]</div>
        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDisable={handleDisable}
        />
      </div>
    </PageLayout>
  );
};

export default Users;
