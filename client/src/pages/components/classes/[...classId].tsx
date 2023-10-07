import { BiGroup } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";

const teachersData = [
  {
    id: 1,
    name: "John Smith",
    position: "Mathematics Teacher",
    experience: "10 years",
    students: 70,
    quote: "Teaching is not just my profession; it's my passion.",
    coursesTaught: ["Algebra", "Geometry", "Calculus"],
    playlist: [
      "https://youtu.be/0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "https://youtu.be/g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "https://youtu.be/pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "https://youtu.be/mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "https://youtu.be/_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "https://youtu.be/ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "https://youtu.be/MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "https://youtu.be/FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
  {
    id: 2,
    name: "Laura Davis",
    position: "History Teacher",
    experience: "11 years",
    students: 70,
    quote: "Exploring the past to understand the present and shape the future.",
    coursesTaught: ["World History", "U.S. History", "Ancient Civilizations"],
    playlist: [
      "https://youtu.be/0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "https://youtu.be/g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "https://youtu.be/pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "https://youtu.be/mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "https://youtu.be/_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "https://youtu.be/ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "https://youtu.be/MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "https://youtu.be/FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "English Literature Professor",
    experience: "12 years",
    students: 70,
    quote: "Literature has the power to change hearts and minds.",
    coursesTaught: [
      "American Literature",
      "British Literature",
      "World Literature",
    ],
    playlist: [
      "https://youtu.be/0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "https://youtu.be/g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "https://youtu.be/pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "https://youtu.be/mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "https://youtu.be/_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "https://youtu.be/ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "https://youtu.be/MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "https://youtu.be/FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
  {
    id: 4,
    name: "Michael Chang",
    position: "Computer Science Educator",
    experience: "9 years",
    students: 70,
    quote: "Navigating the world of coding with enthusiasm and expertise.",
    coursesTaught: [
      "Introduction to Programming",
      "Web Development",
      "Data Structures",
    ],
    playlist: [
      "https://youtu.be/0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "https://youtu.be/g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "https://youtu.be/pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "https://youtu.be/mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "https://youtu.be/_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "https://youtu.be/ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "https://youtu.be/MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "https://youtu.be/FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
  {
    id: 5,
    name: "Alice Johnson",
    position: "Science Instructor",
    experience: "8 years",
    students: 70,
    quote: "Inspiring young minds to explore the wonders of science.",
    coursesTaught: ["Biology", "Chemistry", "Physics"],
    playlist: [
      "https://youtu.be/0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "https://youtu.be/g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "https://youtu.be/pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "https://youtu.be/mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "https://youtu.be/_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "https://youtu.be/ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "https://youtu.be/MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "https://youtu.be/FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
  {
    id: 6,
    name: "Robert Taylor",
    position: "Art and Design Instructor",
    experience: "7 years",
    students: 70,
    quote: "Unleashing creativity through the strokes of art.",
    coursesTaught: ["Drawing", "Painting", "Graphic Design"],
    playlist: [
      "0fYi8SGA20k?si=O_dJq_YiBtd0JM_Z",
      "g7T23Xzys-A?si=1t4DFZcbXeEIxYbT",
      "pUNSHPyVryU?si=LBaJuGDssoxHtwCE",
      "mJ3bGvy0WAY?si=X1WdIOpp8jHFJdBl",
      "_ivIUCSOZ78?si=IeZqjGb-mEuFsaZi",
      "ugCN_gynFYw?si=96Sr-TqQ6P8UJjLC",
      "MJzbJQLGehs?si=OrosUmEflS--MlH4",
      "FHTbsZEJspU?si=Vj1a87pFNNMAW76t",
    ],
  },
];

const ClassesPage = () => {
  const router = useRouter();
  const { classId } = router.query;
  console.log(router.query);
  const teacher = teachersData.find((t) => t.id === Number(classId));

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const getRefIdFromplaylist = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^&\n?#]+)/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <div>
        <div className="flex md:flex-row flex-col gap-5 md:justify-between items-center mb-10">
          <div className="intro flex gap-3">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <Image
                src="https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg"
                alt="teacher-img"
                height={100}
                width={100}
                className="object-cover object-top h-full w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{teacher.name}</h2>
              <p className="text-gray-500">{teacher.position}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 rounded-lg py-2 px-5">
              <div className="text-gray-500 text-2xl">
                <HiOutlineInformationCircle />
              </div>
              <div className="flex gap-2">
                <p className="flex items-center gap-1 px-2 py-1 border text-center text-gray-700 font-semibold">
                  <span className="">
                    <MdVideoLibrary />
                  </span>
                  {teacher.playlist.length} videos
                </p>
                <p className="flex items-center gap-1 px-2 py-1 border text-gray-700 font-semibold">
                  <span>
                    <BiGroup />
                  </span>
                  {teacher.students} students
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-5">
            {teacher.playlist.map((ref, index) => (
              <li
                key={index}
                className="lg:col-span-4 md:col-span-6 col-span-12 rounded-xl overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${getRefIdFromplaylist(
                    ref
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
