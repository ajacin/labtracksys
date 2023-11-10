import React from "react";
import useFetchData from "../../hooks/generic/useFetch";
import Loading from "../Loading";

type DashboardDataType = {
  diapers: { count: number; cost: number };
  formula: { count: number; cost: number };
};

type DashBoardData = {
  data: DashboardDataType;
};

type DataKey = keyof DashboardDataType;

const DashboardTile = () => {
  const { data, loading, error } = useFetchData<DashBoardData>("/dashboard");

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full">
      <div className="bg-white rounded-lg shadow-md p-6">
        {data?.data &&
          Object.keys(data.data).map((itemKey, index) => {
            const key = itemKey as DataKey;
            const itemData = data.data[key];

            if (itemData && typeof itemData === "object") {
              return (
                <div key={index}>
                  <h2 className="text-xl font-semibold mb-4">{key}</h2>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary">Count:</span>
                    <span>{itemData.count}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary">Cost:</span>
                    <span>${itemData.cost}</span>
                  </div>
                </div>
              );
            }

            return null; // Skip rendering if itemData is not an object or is null
          })}
      </div>
    </div>
  );
};

export default DashboardTile;
