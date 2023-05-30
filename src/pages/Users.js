import React, { useState, useEffect, useCallback } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import UserList from "../components/UserList";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const auth = useSelector((state) => state.authentication.auth);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/users/", {
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
  }, [setUsers, auth.token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (userId) => {
    // Handle edit action
    console.log(`Editing user with ID ${userId}`);
  };

  const handleDelete = async (userId) => {
    // Handle delete action
    try {
      toast(`Deleting user`);
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": auth.token,
          },
          //   body: JSON.stringify({
          //     role: "USER",
          //   }),
        }
      );

      if (response.ok) {
        toast.success("Deleted user");
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
      <div className="flex flex-col p-2 gap-1">
        <div className="border border-gray-300 mx-2">[Search users]</div>
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
