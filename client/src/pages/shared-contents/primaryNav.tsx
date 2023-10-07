import { FiBarChart2 } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navmenu from "./navmenu";

/* const menu = [
    {
        label: '',
        icon: '',
        sideIcon: '',
    }
] */

const PrimaryNavbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white scroll-smooth"
            : ""
        }`}
      >
        <div className="py-5 nav-2 w-10/12 m-auto flex items-start justify-between">
          <Navmenu
            handleToggle={handleToggle}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />

          <div className="flex gap-1">
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href=""
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white"
            >
              <FaLinkedinIn />
            </Link>
            <button
              className="h-10 w-10 flex justify-center items-center bg-emerald-500 text-white lg:hidden"
              onClick={handleToggle}
            >
              <span className="-rotate-90 text-2xl ">
                <FiBarChart2 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;

// todo: responsive
