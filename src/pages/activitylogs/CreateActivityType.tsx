import React, { useState } from "react";
import PageLayout from "src/components/router-layouts/PageLayout";
import { useSelector } from "react-redux";
import Button from "src/components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInputField from "src/components/form-fields/TextInputField";
import { RootState } from "src/store/store";

type ActivityFormData = {
  activityName: string;
  activityDescription: string;
  // Add other fields as needed
};

const CreateActivityType: React.FC = () => {
  const [formData, setFormData] = useState<ActivityFormData>({
    activityName: "",
    activityDescription: "",
    // Initialize other fields as needed
  });

  const auth = useSelector((state: RootState) => state.authentication.auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send activity type data to the server using fetch
    fetch(process.env.REACT_APP_API_URL + "/activities/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.token,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Activity type created!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        // Reset form fields after successful submission
        setFormData({ activityName: "", activityDescription: "" });
      })
      .catch((error) => {
        toast.error("Activity type creation failed!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          theme: "colored",
        });
        console.error("Error creating activity type:", error);
      });
  };

  return (
    <>
      <PageLayout>
        <div className="w-screen p-4">
          <h2 className="text-2xl font-semibold mb-4">
            CREATE AN ACTIVITY TYPE
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-1 grid-cols-1 md:grid-cols-3"
          >
            <div className="col-span-3 md:col-span-1 flex">
              <TextInputField
                label="Activity Name"
                id="activityName"
                value={formData.activityName}
                required
                onFieldChange={(val: string) =>
                  setFormData((old) => ({ ...old, activityName: val }))
                }
              />
            </div>
            <div className="col-span-3 md:col-span-1 flex">
              <TextInputField
                label="Activity Description"
                id="activityDescription"
                value={formData.activityDescription}
                onFieldChange={(val) =>
                  setFormData((old) => ({ ...old, activityDescription: val }))
                }
              />
            </div>
            {/* Add additional fields as needed */}
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Button type="submit" text="Create" />
              <Button type="button" text="Cancel" />
            </div>
          </form>
        </div>
      </PageLayout>
      <ToastContainer />
    </>
  );
};

export default CreateActivityType;
