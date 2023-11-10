import React from "react";

type ConfirmationDialogProps = {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialog = ({
  show,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md">
        <p>Are you sure you want to delete this activity?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-secondary text-white px-4 py-2 rounded-md mr-2"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
