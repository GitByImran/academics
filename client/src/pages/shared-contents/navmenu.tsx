import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

interface NavmenuProps {
  handleToggle: () => void;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navmenu: React.FC<NavmenuProps> = ({
  handleToggle,
  showMenu,
  setShowMenu,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleAboutUs = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center gap-10">
        <div className="">
          <Image
            src="/nav-logo.png"
            alt="nav-logo"
            height={100}
            width={150}
          ></Image>
        </div>
        <div
          className={`${
            showMenu &&
            "absolute z-50 top-0 bottom-0 right-0 h-screen w-6/12 p-5 shadow-lg bg-white"
          } lg:relative lg:shadow-none`}
        >
          {showMenu && (
            <div className="flex justify-end w-full text-3xl lg:hidden">
              <span className="cursor-pointer" onClick={closeMenu}>
                <RxCross2 />
              </span>
            </div>
          )}
          <ul
            className={`nav-menu lg:flex  text-lg ${
              showMenu ? "block" : "hidden"
            }
            ${showMenu ? "lg:gap-10" : "lg:gap-6"}`}
          >
            <li className="p-2 hover:bg-gray-100 lg:py-0 lg:hover:bg-none">
              <Link href="/">Home</Link>
            </li>
            <li className="relative p-2  lg:py-0 hover:bg-none">
              <div onClick={toggleAboutUs} className="flex items-center gap-1">
                <Link href="">About Us</Link>
                <span className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
                  <IoIosArrowDown />
                </span>
              </div>
              {isOpen && (
                <ul
                  className={`submenu ${
                    showMenu ? " relative block top-2" : "absolute top-10 z-50"
                  } lg:rounded-bl-lg lg:rounded-br-lg lg:shadow-lg left-0 lg:w-48 w-ful bg-white border-t-2 border-emerald-500 overflow-hidden`}
                >
                  <li className="p-2 hover:bg-gray-100" onClick={closeDropdown}>
                    <Link href="/components/about-teacher">Our Teachers</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100" onClick={closeDropdown}>
                    <Link href="/components/about-school">Our School</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-2 hover:bg-gray-100 lg:py-0 lg:hover:bg-none">
              <Link href="/components/admission">Admission</Link>
            </li>
            <li className="p-2 hover:bg-gray-100 lg:py-0 lg:hover:bg-none">
              <Link href="/components/courses">Course</Link>
            </li>
            <li className="p-2 hover:bg-gray-100 lg:py-0 lg:hover:bg-none">
              <Link href="/components/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
