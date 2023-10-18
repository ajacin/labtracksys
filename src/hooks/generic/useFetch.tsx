import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface FetchDataResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetchData = <T,>(endpoint: string): FetchDataResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const auth = useSelector((state: RootState) => state.authentication.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": auth.token,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
        }

        const jsonData: T = await response.json();
        setData(jsonData);
        setLoading(false);
        setError(null);
      } catch (err: any) {
        //TODO: remove any type
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint,auth.token]);

  return { data, loading, error };
};

export default useFetchData;
