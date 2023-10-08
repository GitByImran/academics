import React from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useProvider } from "../context/Provider";

SwiperCore.use([Navigation, Pagination]);

const PopularCourses: React.FC = () => {
  const { data } = useProvider();

  return (
    <div>
      <div>
        <div className="w-10/12 mx-auto mt-12 mb-12">
          <h2 className="text-3xl py-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize mb-6">
            Popular Courses
          </h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {data.map(
              (details, index) =>
                // Conditionally render only if courseReview is >= 4.2
                parseFloat(details.courseReview) >= 4.5 && (
                  <SwiperSlide key={index}>
                    <div className="bg-gray-100 p-6 rounded-lg my-10">
                      <h3 className="text-xl font-semibold">
                        {details.course.name}
                      </h3>
                      <p className="text-lg">{/*title */}</p>
                      <p className="text-gray-700 mt-4">
                        {details.courseFeedback}
                      </p>
                      <div className="flex justify-between items-center mt-6">
                        <p className="text-emerald-500 font-semibold">
                          {details.courseReview} stars
                        </p>
                        <p className="text-lg">{details.coursePrice}</p>
                      </div>
                      <button className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 mt-5 w-full rounded-md gap-1">
                        add to cart
                      </button>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
