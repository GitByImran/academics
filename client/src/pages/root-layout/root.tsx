import React from "react";
import Navbar from "../components/navbar";
import Footer from "../shared-contents/footer";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Root;
