import React from "react";
// import SelectedUser from "./SelectedUser";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { BiTestTube, BiUserCircle } from "react-icons/bi";
import { ToastContainer } from "react-toastify";

const TestList = ({ testGroups = [], onEdit, onDelete, onDisable }) => {
  //   const [selectedUser, setSelectedUser] = useState(testGroups[0]);
  //   useEffect(() => {
  //     setSelectedUser(testGroups[0]);
  //   }, [testGroups]);

  return (
    <div className="flex flex-col md:flex-row justify-start items-start">
      <div class="my-2 w-full">
        <div class="rounded-lg border shadow-md p-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-secondary dark:text-white">
              Test Groups
            </h3>
            <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              {testGroups?.length ?? ""} Groups
            </p>
          </div>
          <div class="flow-root">
            <ul class="divide-y divide-gray-300 h-128 overflow-scroll">
              {testGroups?.map((group) => {
                return (
                  <li
                    class="py-3 sm:py-4 px-2 md:px-4"
                    // onClick={() => setSelectedUser(group)}
                  >
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-secondary truncate dark:text-white">
                          {`${group.name}`}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {`${group.description}`}
                        </p>
                      </div>
                      <div class="flex flex-col w-20">
                        <p class="flex text-sm text-gray-500 truncate items-center font-semibold gap-1">
                          <BiUserCircle className="text-secondary" />
                          {`${group.createdBy}`}
                        </p>
                      </div>
                      <div class="flex flex-col">
                        <p class="flex text-sm text-gray-500 truncate items-center font-semibold gap-1">
                          <BiTestTube className="text-secondary" />{" "}
                          {`${group.testIds?.length}`}
                        </p>
                      </div>
                      <div>
                        <FaEdit className="text-dark text-xl" />
                      </div>
                      <div>
                        <FaEye className="text-secondary text-xl" />
                      </div>
                      <div>
                        <FaTrashAlt className="text-error text-xl" />
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

export default TestList;
