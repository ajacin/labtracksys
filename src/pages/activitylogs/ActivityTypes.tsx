import React, { useEffect, useState } from "react";
import useFetchData from "src/hooks/generic/useFetch";
import PageLayout from "src/components/router-layouts/PageLayout";
import { FaEdit, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import useDelete from "src/hooks/generic/useDelete";
import PanelButton from "src/components/PanelButton";
import { toast } from "react-toastify";
import Tag from "src/components/Tag";
import ConfirmationDialog from "src/components/confirmationDialog/ConfirmationDialog";

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activityIdToDelete, setActivityIdToDelete] = useState("");
  const {
    success: deleteSuccess,
    error: deleteError,
    deleteData,
  } = useDelete();

  useEffect(() => {
    // Show toast on successful deletion
    if (deleteSuccess) {
      setShowConfirmation(false);
      window.location.reload();
      toast.success("Activity type deleted successfully!");
    }
    if (deleteError) toast.error("Delete failed!");
  }, [deleteSuccess, deleteError]);

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
    setActivityIdToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting activity type with ID: ${activityIdToDelete}`);
    deleteData(activityIdToDelete, "/activities");
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <PageLayout>
      <>
        <div className="w-full h-screen overflow-y-auto">
          <div className="mx-auto max-w-4xl p-4">
            {data?.data?.map((item: Activities) => (
              <div
                key={item.id}
                className="border p-4 m-4 rounded-md shadow-md relative"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">
                    {item.activityName}
                  </h3>
                  <div className="flex">
                    <button
                      className="bg-primary text-white px-4 py-2 rounded-md mr-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-secondary text-white px-4 py-2 rounded-md"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">{item.activityDescription}</p>
                <p className="text-gray-500">Status: {item.active}</p>
                <Tag
                  color="tertiary"
                  text={item.active ? "active" : "inactive"}
                ></Tag>
              </div>
            ))}
            <PanelButton text="Add New" to="/activitytypes/create">
              <FaRegPlusSquare className="text-secondary" />
            </PanelButton>
          </div>
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <div className="mx-auto max-w-4xl p-4">
            {/* ... existing code */}
            <ConfirmationDialog
              text={"Are you sure you want to delete this activity?"}
              show={showConfirmation}
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default ActivityTypes;
