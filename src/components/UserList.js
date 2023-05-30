import React from "react";
// import SelectedUser from "./SelectedUser";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const UserList = ({ users = [], onEdit, onDelete, onDisable }) => {
  //   const [selectedUser, setSelectedUser] = useState(users[0]);
  //   useEffect(() => {
  //     setSelectedUser(users[0]);
  //   }, [users]);

  return (
    <div className="flex flex-col md:flex-row justify-start items-start">
      <div class="my-2 w-full">
        <div class="rounded-lg border shadow-md p-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-secondary dark:text-white">
              Users
            </h3>
            <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              {users?.length ?? ""} users
            </p>
          </div>
          <div class="flow-root overflow-scroll">
            <ul class="divide-y divide-gray-300 overflow-scroll">
              {users?.map((user) => {
                return (
                  <li
                    class="py-3 sm:py-4 px-2"
                    // onClick={() => setSelectedUser(user)}
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
                      <div>
                        <FaUserEdit className="text-warning text-xl" />
                      </div>
                      <div>
                        {user.role !== "SUPERUSER" && (
                          <div
                            className="text-xs md:text-base cursor-pointer"
                            onClick={() => onDelete(user.id)}
                          >
                            <FaTrashAlt className="text-emerald text-xl" />
                          </div>
                        )}
                        {user.role === "SUPERUSER" && (
                          <div
                            className="text-xs md:text-base cursor-pointer"
                            onClick={() =>
                              onDelete(toast.warn("Cannot delete a super user"))
                            }
                          >
                            <FaTrashAlt className="text-disabled text-xl" />
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <SelectedUser
        selectedUser={selectedUser}
        onDelete={onDelete}
      ></SelectedUser> */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UserList;
