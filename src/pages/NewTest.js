import React, { useState } from "react";

const NewTest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div>New Test</div>
    </>
  );
};

export default NewTest;
