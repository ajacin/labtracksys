import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
// import { ToastContainer } from "react-toastify";
// import { BiUserCircle } from "react-icons/bi";
import { Test, TestResponse } from "../types/TestInterface";
import useFetchData from "../hooks/generic/useFetch";

// type ListProps = {
//   Pick<Test, "name" | "description">[]}
type ListProps = {
  testIds: Test["_id"][];
};

const List = ({ testIds }: ListProps) => {
  const [tests, setTests] = useState<Test[] | undefined>([]);

  const { data, loading, error } = useFetchData<TestResponse>("/tests/");

  useEffect(() => {
    setTests(data?.data);
  }, [data]);
  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return (
    <div className="flex flex-col md:flex-row justify-start items-start">
      <div className="my-2 w-full">
        <div className="rounded-lg border shadow-md p-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-secondary dark:text-white">
              Tests
            </h3>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 md:hidden">
              {testIds.length}/{data?.data?.length} selected.
            </p>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 hidden md:flex">
              {testIds.length} out of {data?.data?.length} tests selected.
            </p>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-300 h-128 overflow-scroll">
              {tests?.map((test) => {
                return (
                  <li
                    className="py-3 sm:py-4 px-2 md:px-4"
                    // onClick={() => setSelectedUser(test)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-secondary truncate dark:text-white">
                          {`${test.name}`}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
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
