import { BiCheck } from "react-icons/bi";
import Image from "next/image";
import React from "react";

const Admission: React.FC = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="flex flex-col gap-20 my-20">
          <div className="part-1 flex md:flex-row flex-col gap-10">
            <div className="basis-1/2">
              <Image
                src="https://images.pexels.com/photos/8293764/pexels-photo-8293764.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="basis-1/2">
              <h2 className="text-3xl text-black pb-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize">
                Admission Requirements
              </h2>
              <p className="mt-10 text-lg text-gray-500 flex flex-col gap-5">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  itaque dolore libero corrupti! Itaque, delectus?
                </span>
                <span>
                  Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                  odit placeat nesciunt, voluptatum totam facere.
                </span>
              </p>
              <ul className="my-5">
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  Accomplished Application Form
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  High School Report Card
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  High School Transcript
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  Certificate of Good Moral Characte
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  2×2 picture
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-500">
                  <span className="text-emerald-500">
                    <BiCheck />
                  </span>
                  1×1 picture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
