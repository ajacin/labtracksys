import React from "react";
import useFetchData from "src/hooks/generic/useFetch";
import PageLayout from "src/components/router-layouts/PageLayout";

// Create a type or interface for your data
interface Activities {
  id: string;
  activityName: string;
  activityDescription: string;
  active: string;
}

type Data = {
  data: Activities[] | null;
} | null;

const ActivityTypes = () => {
  const { data, loading, error } = useFetchData<Data>("/activities/");

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-4 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  const handleEdit = (id: string) => {
    console.log(`Editing activity type with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting activity type with ID: ${id}`);
  };

  const handleAdd = () => {
    console.log("Adding a new activity type");
  };

  return (
    <PageLayout>
      <div className="w-full h-screen overflow-y-auto">
        <div className="mx-auto max-w-4xl p-4">
          {data?.data?.map((item: Activities) => (
            <div key={item.id} className="border p-4 m-4 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold">{item.activityName}</h3>
              <p className="text-gray-700">{item.activityDescription}</p>
              <p className="text-gray-500">Status: {item.active}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-secondary text-white px-4 py-2 rounded-md"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
              className="bg-tertiary text-white px-4 py-2 rounded-md"
              onClick={handleAdd}
            >
              Add New Activity Type
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ActivityTypes;
