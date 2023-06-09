import React, { useState } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInputField from "../components/form-fields/TextInputField";
import SelectInputField from "../components/form-fields/SelectInputField";
// import InputListFromId from "../components/InputListFromId";
import List from "../components/List";
const CreateTest = () => {
  // const [name, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [role, setRole] = useState("USER");
  const [formData, setFormData] = useState({
    name: null,
    description: null,
    testIds: [
      "6477b41332ade7e70fdcc849",
      "6477b6f61c93d3956b79112a",
      "6477c4bd20aad115f7c6f443",
      "6477c4bd20aad115f7c6f444",
      "6477c4bd20aad115f7c6f445",
    ],
    createdBy: null,
  });

  const auth = useSelector((state) => state.authentication.auth);

  // const fetchTests = useCallback(async () => {
  //   try {
  //     const response = await fetch(process.env.REACT_APP_API_URL + "/tests/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token": auth.token,
  //       },
  //       //   body: JSON.stringify({
  //       //     role: "USER",
  //       //   }),
  //     });

  //     if (response.ok) {
  //       const testsJson = await response.json();
  //       setTests(testsJson?.data);
  //     } else {
  //       // Handle error response
  //       console.error("Failed to fetch tests:", response.statusText);
  //     }
  //   } catch (error) {
  //     // Handle fetch error
  //     console.error("Error fetching tests:", error);
  //   }
  // }, [setTests, auth.token]);

  // useEffect(() => {
  //   fetchTests();
  // }, [fetchTests]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data to the server using fetch
    fetch(process.env.REACT_APP_API_URL + "/testgroup/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.token,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Test created!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        // Reset form fields after successful submission
        setFormData({});
      })
      .catch((error) => {
        toast.error("Test creation failed!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          theme: "colored",
        });
        console.error("Error creating test:", error);
      });
  };

  const addTest = () => {
    let iDs = formData.testIds;
    iDs.push("");
    setFormData({ ...formData, testIds: iDs });
  };

  return (
    <>
      <PageLayout className="border-xl">
        <div className="w-screen p-4">
          <h2 className="text-2xl font-semibold mb-4">CREATE A TEST GROUP</h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-1 grid-cols-1 md:grid-cols-3"
          >
            <TextInputField
              label="Name"
              id="name"
              value={formData.name}
              required
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, name: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Description"
              id="description"
              value={formData.description}
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, description: val }))
              }
            ></TextInputField>
            <div className="col-span-3 grid grid-cols-3 border rounded py-3">
              <div className="col-span-3 grid grid-cols-3 px-3 mb-6 md:mb-2">
                <h4 className="col-span-1 font-semibold">TESTS</h4>
                <div className="hidden md:flex col-span-1"></div>
                <div className="col-span-2 md:col-span-1 flex items-center justify-around bg-light border border-gray p-1">
                  <Button text={"+"} onButtonClick={() => addTest()}></Button>
                  <span>{formData?.testIds?.length} tests</span>
                </div>
              </div>

              {formData.testIds.map((test) => {
                return (
                  <div className="col-span-3 md:col-span-1 p-2">
                    {" "}
                    <SelectInputField
                      label="Included Test"
                      value={test}
                    ></SelectInputField>
                  </div>
                );
              })}
            </div>
            <div className="col-span-3">
              <List></List>
            </div>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Button type="submit" text="Create"></Button>
            </div>
          </form>
          {/* <InputListFromId
            className="tile text-right col-span-3 px-3 mb-6 md:mb-0 "
            idList={formData.testIds}
          ></InputListFromId> */}
        </div>
      </PageLayout>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CreateTest;
