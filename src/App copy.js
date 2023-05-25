import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/lab/", {
          headers: {
            "Content-Type": "application/json",
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFydW4iLCJwYXNzd29yZCI6ImFydW5wYXNzIiwiaWF0IjoxNjg0OTg3OTE2LCJleHAiOjE2ODUwNzQzMTZ9.lIaeNNyolletFJG4YYlJ0QAT6-9XiShLfOp8lyfCkxk",
          },
        });
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Array:</h1>
      <ul>
        {data.length &&
          data?.map((item, index) => <li key={index}>{item.labname}</li>)}
      </ul>
    </div>
  );
};

export default App;
