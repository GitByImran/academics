import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useProvider } from "../context/Provider";

const AboutTeacher: React.FC = () => {
  const { data } = useProvider();

  return (
    <div>
      <div className="w-10/12 m-auto">
        <h2 className="text-3xl font-normal border-b-4 border-b-emerald-500 w-max capitalize my-10">
          Our Teachers
        </h2>

        <div className="grid grid-cols-12 gap-5 my-5">
          {data.map((details, index) => (
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div className="h-24 w-24 overflow-hidden rounded-full mx-auto -mb-10 border-white">
                <Image
                  src="https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg"
                  alt="photo-1506794778202-cad84cf45f1d.jpg"
                  height={100}
                  width={100}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="border p-5 pt-16 text-gray-500">
                <h3 className="text-2xl text-emerald-500 font-semibold">
                  {details.teacher.name}
                </h3>
                <p className="mb-5">{details.teacher.position}</p>
                {/*     <p className="mb-1 flex items-center bg-gray-100 p-2 border rounded-lg">
                  <span className="text-xl mr-5">
                    <BsChatSquareQuote />
                  </span>
                  {teacher.quote}
                </p> */}
                <p className="mb-1">Experience: {details.teacher.experience}</p>
                <p className="mb-1">Courses Taught: {details.course.name}</p>
                <Link
                  href={`/components/classes/${details.id}`}
                  className="text-md bg-emerald-500 text-white mt-2 px-6 py-2 flex justify-center items-center gap-1 rounded"
                >
                  See free classes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeacher;
