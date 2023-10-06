import Image from "next/image";
import React from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const testimonialsData = [
  {
    id: 1,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "Charlie Brown",
    role: "CEO",
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "Alice Johnson",
    role: "CTO",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.",
  },
  {
    id: 3,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "Bob Smith",
    role: "Developer",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "Jane Doe",
    role: "Designer",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "John Doe",
    role: "Manager",
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    image: "https://i.ibb.co/FBxMQt0/photo-1506794778202-cad84cf45f1d.jpg",
    name: "Eve Anderson",
    role: "Analyst",
    testimonial:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

interface Person {
  id: number;
  image: string;
  name: string;
  role: string;
  testimonial: string;
}

const Testimonials: React.FC = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto mt-12 mb-12">
        <h2 className="text-3xl font-normal border-b-4 border-b-emerald-500 w-max capitalize mb-6">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonialsData.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="bg-gray-100 p-6 rounded-lg my-10">
                <div className="h-10 w-10 overflow-hidden rounded-full mb-2">
                  <Image
                    src={person.image}
                    alt=""
                    height={100}
                    width={100}
                    className="object-cover "
                  />
                </div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-md text-gray-600 mb-2">{person.role}</p>
                <p className="text-lg text-gray-500 font-semibold">
                  {person.testimonial}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
