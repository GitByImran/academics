import { MdOutlineVideoLibrary } from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";
import { BsMortarboard } from "react-icons/bs";
import React from "react";

const Works: React.FC = () => {
  return (
    <div className="w-10/12 m-auto flex flex-col items-center my-20">
      <h2 className="text-3xl font-normal border-b-4 border-b-emerald-500 w-fit capitalize">
        how academics works
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 my-20">
        <div className="flex flex-col items-center justify-center mb-0">
          <div className="bg-emerald-500 h-24 w-24 flex justify-center items-center text-5xl text-white rounded-full relative z-10 -mb-10">
            <BsMortarboard />
          </div>
          <div className="flex flex-col gap-2 items-center border pt-14 p-5 text-center">
            <h2 className="text-xl">Personalize Learning</h2>
            <p className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
              hendrerit elit
            </p>
            <button className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 mt-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-0">
          <div className="bg-emerald-500 h-24 w-24 flex justify-center items-center text-5xl text-white rounded-full relative z-10 -mb-10">
            <MdOutlineVideoLibrary />
          </div>
          <div className="flex flex-col gap-2 items-center border pt-14 p-5 text-center">
            <h2 className="text-xl">Trusted Courses</h2>
            <p className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
              hendrerit elit
            </p>
            <button className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 mt-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-0">
          <div className="bg-emerald-500 h-24 w-24 flex justify-center items-center text-5xl text-white rounded-full relative z-10 -mb-10">
            <HiOutlineLibrary />
          </div>
          <div className="flex flex-col gap-2 items-center border pt-14 p-5 text-center">
            <h2 className="text-xl">Tools for Students</h2>
            <p className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
              hendrerit elit
            </p>
            <button className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 mt-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
