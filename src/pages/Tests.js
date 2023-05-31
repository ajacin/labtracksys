import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Panel from "../components/Panel";
import PanelButton from "../components/PanelButton";
import { FaRegPlusSquare } from "react-icons/fa";
import SearchUsers from "../components/SearchUsers";
import TestList from "../components/TestList";

const Tests = () => {
  const [tests, setTests] = useState([]);
  const auth = useSelector((state) => state.authentication.auth);

  const fetchTests = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/tests/", {
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
        const testsJson = await response.json();
        setTests(testsJson?.data);
      } else {
        // Handle error response
        console.error("Failed to fetch tests:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching tests:", error);
    }
  }, [setTests, auth.token]);

  useEffect(() => {
    fetchTests();
  }, [fetchTests]);

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
          //   body: JSON.stringify({
          //     role: "USER",
          //   }),
        }
      );

      if (response.ok) {
        toast.success("Test deleted");
        fetchTests();
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

  return (
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
        tests={tests}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDisable={handleDisable}
      />
    </div>
  );
};

export default Tests;
