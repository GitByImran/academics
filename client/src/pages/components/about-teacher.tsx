import { BsChatSquareQuote } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const teachersData = [
  {
    id: 1,
    name: "John Smith",
    position: "Mathematics Teacher",
    experience: "10 years",
    quote: "Teaching is not just my profession; it's my passion.",
    coursesTaught: ["Algebra", "Geometry", "Calculus"],
  },
  {
    id: 2,
    name: "Laura Davis",
    position: "History Teacher",
    experience: "11 years",
    quote: "Exploring the past to understand the present and shape the future.",
    coursesTaught: ["World History", "U.S. History", "Ancient Civilizations"],
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "English Literature Professor",
    experience: "12 years",
    quote: "Literature has the power to change hearts and minds.",
    coursesTaught: [
      "American Literature",
      "British Literature",
      "World Literature",
    ],
  },
  {
    id: 4,
    name: "Michael Chang",
    position: "Computer Science Educator",
    experience: "9 years",
    quote: "Navigating the world of coding with enthusiasm and expertise.",
    coursesTaught: [
      "Introduction to Programming",
      "Web Development",
      "Data Structures",
    ],
  },
  {
    id: 5,
    name: "Alice Johnson",
    position: "Science Instructor",
    experience: "8 years",
    quote: "Inspiring young minds to explore the wonders of science.",
    coursesTaught: ["Biology", "Chemistry", "Physics"],
  },
  {
    id: 6,
    name: "Robert Taylor",
    position: "Art and Design Instructor",
    experience: "7 years",
    quote: "Unleashing creativity through the strokes of art.",
    coursesTaught: ["Drawing", "Painting", "Graphic Design"],
  },
];

const AboutTeacher = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <h2 className="text-3xl font-normal border-b-4 border-b-emerald-500 w-max capitalize my-10">
          Our Teachers
        </h2>

        <div className="grid grid-cols-12 gap-5 my-5">
          {teachersData.map((teacher, index) => (
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
                  {teacher.name}
                </h3>
                <p className="mb-5">{teacher.position}</p>
                <p className="mb-1 flex items-center bg-gray-100 p-2 border rounded-lg">
                  <span className="text-xl mr-5">
                    <BsChatSquareQuote />
                  </span>
                  {teacher.quote}
                </p>
                <p className="mb-1">Experience: {teacher.experience}</p>
                <p className="mb-1">
                  Courses Taught: {teacher.coursesTaught.join(", ")}
                </p>
                <Link
                  href="#"
                  className="text-md bg-emerald-500 text-white mt-2 px-6 py-2 flex items-center gap-1 rounded"
                >
                  See classes
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
