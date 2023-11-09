import React from "react";
import useFetchData from "src/hooks/generic/useFetch";
import { FaLightbulb } from "react-icons/fa";

// Create a type or interface for your data
interface ActivityLog {
  id: number;
  title: string;
  description: string;
  time: string;
  userId: number;
}

type Data = {
  data: ActivityLog[] | null;
} | null;

const ActivityLogsList = () => {
  const { data, loading, error } = useFetchData<Data>("/activitylogs/");

  function formatTimestampToReadableDate(timestamp: string): string {
    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleString("en-US", options);
  }

  // Example usage:
  const timestamp = "2023-11-09T01:05:17.051Z";
  const formattedDate = formatTimestampToReadableDate(timestamp);
  console.log(formattedDate);

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

  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="timeline mx-auto max-w-4xl p-4">
        {data?.data?.map((item: ActivityLog) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-badge flex flex-row gap-2">
              <FaLightbulb></FaLightbulb>
              <span className="text-secondary">
                Time: {formatTimestampToReadableDate(item.time)}
              </span>
            </div>
            <div className="timeline-panel bg-white flex mb-2">
              <div className="flex border-r-2 border-secondary ml-2"></div>
              <div className="flex flex-15 flex-col p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>ID: {item.id}</p>
                <p>Description: {item.description}</p>
                <p>Time: {item.time}</p>
                <p>UserID: {item.userId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLogsList;
