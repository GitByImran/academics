import { BsPersonFillAdd } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Locator from "./locator";

const SecondaryNavbar = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-10/12 m-auto py-3">
          <div className="nav-1 flex justify-between items-center">
            <div className="lg:flex gap-5 items-center text-emerald-500 hidden">
              <Link href="" className="flex items-center gap-2">
                <FaQuestionCircle /> Have a questions?
              </Link>
              <Link href="tel:1020123456" className="flex items-center gap-2">
                <IoMdCall /> 10 20 123 456
              </Link>
              <Link
                href="mailto:info@academics.com"
                className="flex items-center gap-2"
              >
                <FiMail /> info@academics.com
              </Link>
            </div>
            <div className="hidden">
              <Locator />
            </div>
            <div className="flex gap-5 items-center justify-end lg:w-fit w-full text-emerald-500">
              <Link href="/auth/login" className="flex items-center gap-2">
                <BiLockOpenAlt /> Log in
              </Link>
              <Link
                href="/auth/register"
                className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 flex items-center gap-1"
              >
                <BsPersonFillAdd /> Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;

// todo: responsive
