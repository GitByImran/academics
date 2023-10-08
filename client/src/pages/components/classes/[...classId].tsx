import { BiGroup } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";
import { useProvider } from "@/pages/context/Provider";

const ClassesPage: React.FC = () => {
  const { data } = useProvider();

  const router = useRouter();
  const { classId } = router.query;
  const teacher = data.find((t) => t.id === Number(classId));

  console.log(teacher);

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
              <h2 className="text-2xl font-semibold">{teacher.teacher.name}</h2>
              <p className="text-gray-500">{teacher.teacher.position}</p>
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
                  {teacher.enrolled_students} Students
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
