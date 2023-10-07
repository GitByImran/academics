import React from "react";
import Navbar from "../components/navbar";
import Footer from "../shared-contents/footer";

const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Root;
