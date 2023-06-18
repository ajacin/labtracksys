import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Panel from "../components/Panel";
import PanelButton from "../components/PanelButton";
import { FaRegPlusSquare } from "react-icons/fa";
import SearchUsers from "../components/SearchUsers";
import TestGroupsList from "../components/TestGroupsList";
import PageLayout from "../components/router-layouts/PageLayout";

const TestGroups = () => {
  const [testgroups, setTestGroups] = useState([]);
  const auth = useSelector((state) => state.authentication.auth);

  const fetchTestGroups = useCallback(async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/testgroups/",
        {
          method: "GET",
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
        const testsJson = await response.json();
        setTestGroups(testsJson?.data);
      } else {
        // Handle error response
        console.error("Failed to fetch testgroups:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching testgroups:", error);
    }
  }, [setTestGroups, auth.token]);

  useEffect(() => {
    fetchTestGroups();
  }, [fetchTestGroups]);

  const handleEdit = (testId) => {
    // Handle edit action
    console.log(`Edit`);
  };

  const handleDelete = async (testId) => {
    // Handle delete action
    try {
      toast(`Deleting test`);
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/testgroups/${testId}`,
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
        toast.success("Test deleted");
        fetchTestGroups();
      } else {
        // Handle error response
        console.error("Failed to fetch testgroups:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching testgroups:", error);
    }
  };

  const handleDisable = (testId) => {
    // Handle disable action
    console.log(`Disabling test with ID ${testId}`);
  };

  return (
    <PageLayout>
      <div className="flex flex-col p-2 gap-1">
        <Panel>
          <PanelButton to="/testgroups/create" text="Create">
            <FaRegPlusSquare className="text-secondary" />
          </PanelButton>
        </Panel>
        <div className=" w-full flex justify-end">
          <SearchUsers></SearchUsers>
        </div>
        <TestGroupsList
          testGroups={testgroups}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDisable={handleDisable}
        />
      </div>
    </PageLayout>
  );
};

export default TestGroups;
