import React, { useState } from "react";
import PageLayout from "src/components/router-layouts/PageLayout";
import TextInputField from "src/components/form-fields/TextInputField";
import Button from "src/components/Button";
import { toast, ToastContainer } from "react-toastify";
import { RootState } from "src/store/store";
import { useSelector } from "react-redux";
import DropDownUser from "src/components/DropDownUser";
import DropdownActivity from "src/components/DropDownActivity";

interface ActivityLogFormData {
  title: string;
  description: string;
  activityId: string;
  userId: string;
}

const CreateActivityLog: React.FC = () => {
  const [formData, setFormData] = useState<ActivityLogFormData>({
    title: "",
    description: "",
    activityId: "",
    userId: "",
  });

  const auth = useSelector((state: RootState) => state.authentication.auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_API_URL + "/activitylogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.token,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Activity log created!", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        setFormData({
          title: "",
          description: "",
          activityId: "",
          userId: "",
        });
      })
      .catch((error) => {
        toast.error("Activity log creation failed!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          theme: "colored",
        });
        console.error("Error creating activity log:", error);
      });
  };

  return (
    <>
      <PageLayout>
        <div className="w-screen p-4">
          <h2 className="text-2xl font-semibold mb-4">
            CREATE AN ACTIVITY LOG
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-1 grid-cols-1 md:grid-cols-3"
          >
            <div className="col-span-3 md:col-span-1 flex">
              <TextInputField
                label="Title"
                id="title"
                value={formData.title}
                required
                onFieldChange={(val: string) =>
                  setFormData((old) => ({ ...old, title: val }))
                }
              />
            </div>
            <div className="col-span-3 md:col-span-1 flex">
              <TextInputField
                label="Description"
                id="description"
                value={formData.description}
                onFieldChange={(val) =>
                  setFormData((old) => ({ ...old, description: val }))
                }
              />
            </div>
            <div className="col-span-3 md:col-span-1 flex">
              <DropdownActivity
                label="Activity ID"
                id="activityId"
                selectedValue={formData.activityId}
                onValueChange={(val: string) =>
                  setFormData((old) => ({ ...old, activityId: val }))
                }
                endpoint="/activities/"
              />
            </div>
            <div className="col-span-3 md:col-span-1 flex">
              <DropDownUser
                label="User ID"
                id="userId"
                selectedValue={formData.userId}
                onValueChange={(val: string) =>
                  setFormData((old) => ({ ...old, userId: val }))
                }
                endpoint="/users/"
              />
            </div>
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

export default CreateActivityLog;
