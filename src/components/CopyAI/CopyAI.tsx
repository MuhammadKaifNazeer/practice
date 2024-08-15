import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

const CopyAI = () => {
  return (
    <>
      <div className="flex-col">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default CopyAI;
