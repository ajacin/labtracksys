import React from "react";

const Panel = ({ children }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-8 gap-2 py-2 m-2 items-center justify-items-centre border-0 border-b border-primary">
      {children}
    </div>
  );
};

export default Panel;
