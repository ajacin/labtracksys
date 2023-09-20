import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Panel from "../components/Panel";
import PanelButton from "../components/PanelButton";
import { FaRegPlusSquare } from "react-icons/fa";
import SearchUsers from "../components/SearchUsers";
import TestList from "../components/TestList";
import PageLayout from "../components/router-layouts/PageLayout";
import useFetchData from "../hooks/generic/useFetch";
const Tests = () => {
  const [tests, setTests] = useState([]);
  const auth = useSelector((state) => state.authentication.auth);

  const { data, loading, error } = useFetchData("/tests/");

  const handleEdit = (testId) => {
    // Handle edit action
    console.log(`Edit`);
  };

  const handleDelete = async (testId) => {
    // Handle delete action
    try {
      toast(`Deleting test`);
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/tests/${testId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": auth.token,
          },
        }
      );

      if (response.ok) {
        toast.success("Test deleted");
        // fetchTests();
      } else {
        // Handle error response
        console.error("Failed to fetch tests:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching tests:", error);
    }
  };

  const handleDisable = (testId) => {
    // Handle disable action
    console.log(`Disabling test with ID ${testId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PageLayout>
      <div className="flex flex-col p-2 gap-1">
        <Panel>
          <PanelButton to="/tests/create" text="Create">
            <FaRegPlusSquare className="text-secondary" />
          </PanelButton>
        </Panel>
        <div className=" w-full flex justify-end">
          <SearchUsers></SearchUsers>
        </div>

        <TestList
          tests={data?.data}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDisable={handleDisable}
        />
      </div>
    </PageLayout>
  );
};

export default Tests;
