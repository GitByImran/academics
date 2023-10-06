import React from "react";
import Navbar from "../components/navbar";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Root;
