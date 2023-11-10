import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const useDelete = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const auth = useSelector((state: RootState) => state.authentication.auth);

  const deleteData = async (id: string, url: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${url}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": auth.token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      // Additional logic for success
      setSuccess(true);
      setError(null);
    } catch (error: any) {
      // Handle errors
      setSuccess(false);
      setError(error);
    }
  };

  return { deleteData, success, error };
};

export default useDelete;
