import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Section1 = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Section1;
