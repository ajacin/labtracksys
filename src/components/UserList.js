import React, { useState, useEffect } from "react";
import SelectedUser from "./SelectedUser";

const UserList = ({ users = [], onEdit, onDelete, onDisable }) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  useEffect(() => {
    setSelectedUser(users[0]);
  }, [users]);

  return (
    <div className="flex flex-col md:flex-row justify-start items-start">
      <div class="my-2 w-full md:w-96">
        <div class="rounded-lg border shadow-md p-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-secondary dark:text-white">
              Users
            </h3>
            <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all {users?.length ?? ""} users
            </p>
          </div>
          <div class="flow-root overflow-scroll">
            <ul class="divide-y divide-primary dark:divide-gray-700 max-h-96 overflow-scroll">
              {users?.map((user) => {
                return (
                  <li
                    class="py-3 sm:py-4"
                    onClick={() => setSelectedUser(user)}
                  >
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
                          alt={user.firstName}
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-secondary truncate dark:text-white">
                          {`${user.firstName} ${user.lastName}`}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {`${user.email}`}
                        </p>
                      </div>
                      {/* <div class="inline-flex items-center text-base font-semibold text-secondary dark:text-white">
                        {user.role !== "SUPERUSER" && (
                          <p
                            className="text-xs md:text-base"
                            onClick={() => onDelete(user.id)}
                          >
                            Delete
                          </p>
                        )}
                      </div> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <SelectedUser
        selectedUser={selectedUser}
        onDelete={onDelete}
      ></SelectedUser>
    </div>
  );
};

export default UserList;
