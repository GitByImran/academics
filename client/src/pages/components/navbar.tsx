import React from "react";
import PrimaryNavbar from "../shared-contents/primaryNav";
import SecondaryNavbar from "../shared-contents/secondaryNav";

const Navbar: React.FC = () => {
  return (
    <div>
      <SecondaryNavbar />
      <PrimaryNavbar />
    </div>
  );
};

export default Navbar;
