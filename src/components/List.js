import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
// import { ToastContainer } from "react-toastify";
// import { BiUserCircle } from "react-icons/bi";

const List = (testList) => {
  const [tests] = useState([{ name: "name1", description: "description1" }]);
  return (
    <div className="flex flex-col md:flex-row justify-start items-start">
      <div class="my-2 w-full">
        <div class="rounded-lg border shadow-md p-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-secondary dark:text-white">
              Tests
            </h3>
            <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              tests
            </p>
          </div>
          <div class="flow-root">
            <ul class="divide-y divide-gray-300 h-128 overflow-scroll">
              {tests?.map((test) => {
                return (
                  <li
                    class="py-3 sm:py-4 px-2 md:px-4"
                    // onClick={() => setSelectedUser(test)}
                  >
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-secondary truncate dark:text-white">
                          {`${test.name}`}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {`${test.description}`}
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
    </div>
  );
};

export default List;
