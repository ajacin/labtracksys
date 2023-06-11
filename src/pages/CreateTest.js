import React, { useState } from "react";
import PageLayout from "../components/router-layouts/PageLayout";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInputField from "../components/form-fields/TextInputField";

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
    resultType: null,
    unit: null,
    minRange: null,
    maxRange: null,
    pregnancyMinRange: null,
    pregnancyMaxRange: null,
    femaleMinRange: null,
    femaleMaxRange: null,
    maleMinRange: null,
    maleMaxRange: null,
    childMinRange: null,
    childMaxRange: null,
    newBornMinRange: null,
    newBornMaxRange: null,
    newBornMaxAgeMonths: null,
    childMaxAge: null,
    resultStrings: null,
    createdBy: null,
  });

  const auth = useSelector((state) => state.authentication.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data to the server using fetch
    fetch(process.env.REACT_APP_API_URL + "/tests/create", {
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

  return (
    <>
      <PageLayout className="border-xl">
        <div className="w-screen p-4">
          <h2 className="text-2xl font-semibold mb-4">Create a Test</h2>
          <form onSubmit={handleSubmit} className="flex gap-1 flex-wrap">
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
            <TextInputField
              label="Result Type"
              id="resultType"
              value={formData.resultType}
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, resultType: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Unit"
              id="unit"
              value={formData.unit}
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, unit: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Minimum Range"
              id="minRange"
              value={formData.minRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, minRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Maximum Range"
              id="maxRange"
              value={formData.maxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, maxRange: val }))
              }
            ></TextInputField>

            <TextInputField
              label="Pregnancy Minimum Range"
              id="pregnancyMinRange"
              value={formData.pregnancyMinRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, pregnancyMinRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Pregnancy Maximum Range"
              id="pregnancyMaxRange"
              value={formData.pregnancyMaxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, pregnancyMaxRange: val }))
              }
            ></TextInputField>

            <TextInputField
              label="Female Minimum Range"
              id="femaleMinRange"
              value={formData.femaleMinRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, femaleMinRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Female Maximum Range"
              id="femaleMaxRange"
              value={formData.femaleMaxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, femaleMaxRange: val }))
              }
            ></TextInputField>

            <TextInputField
              label="Male Minimum Range"
              id="maleMinRange"
              value={formData.maleMinRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, maleMinRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Male Maximum Range"
              id="maleMaxRange"
              value={formData.maleMaxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, maleMaxRange: val }))
              }
            ></TextInputField>

            <TextInputField
              label="Child Minimum Range"
              id="childMinRange"
              value={formData.childMinRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, childMinRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Child Maximum Range"
              id="childMaxRange"
              value={formData.childMaxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, childMaxRange: val }))
              }
            ></TextInputField>

            <TextInputField
              label="Newborn Minimum Range"
              id="newBornMinRange"
              value={formData.newBornMinRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, newBornMinRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Newborn Maximum Range"
              id="newBornMaxRange"
              value={formData.newBornMaxRange}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, newBornMaxRange: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Child Maximum Age"
              id="childMaxAge"
              value={formData.childMaxAge}
              type="number"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, childMaxAge: val }))
              }
            ></TextInputField>
            <TextInputField
              label="Result strings"
              id="resultStrings"
              value={formData.resultStrings}
              type="text"
              onFieldChange={(val) =>
                setFormData((old) => ({ ...old, resultStrings: val }))
              }
            ></TextInputField>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
            <div className="text-right w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Button type="submit" text="Create"></Button>
            </div>
          </form>
        </div>
      </PageLayout>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CreateTest;
