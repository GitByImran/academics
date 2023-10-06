import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "#183661" }}>
      <div className="w-10/12 m-auto py-20">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 text-white flex flex-col gap-5">
            <div className="">
              <Image
                src="/footer-logo.png"
                alt="nav-logo"
                height={100}
                width={150}
              ></Image>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nemo minima qui dolor, iusto iure.
            </p>
            <Link href="#" className="text-lg text-emerald-400 font-normal">
              Learn More
            </Link>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg text-white border-b-4 border-b-white w-fit mb-5">
              Our Services
            </h2>
            <ul>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Acedemic</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">News</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Our Interns</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Our Leadership</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Human Resources</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg text-white border-b-4 border-b-white w-fit mb-5">
              Our Courses
            </h2>
            <ul>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Math</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Science & Engineering</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Arts & Humanities</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Economics & Finance</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Business Administration</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Computer Science</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg text-white border-b-4 border-b-white w-fit mb-5">
              Contact
            </h2>
            <ul>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Help Center</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Support Community</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Press</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Share Your Story</Link>
              </li>
              <li className="text-md text-emerald-400 font-normal">
                <Link href="#">Our Supporters</Link>
              </li>
            </ul>
          </div>
        </div>
        <center className="mt-20 text-white">
          Copyright ©2023 All rights reserved | Imran Hasan Ovi
        </center>
      </div>
    </div>
  );
};

export default Footer;
