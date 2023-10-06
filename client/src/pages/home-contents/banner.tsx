import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const carouselData = [
  {
    image:
      "https://images.pexels.com/photos/5303549/pexels-photo-5303549.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Explore a world of online learning with our courses.",
    buttonName: "Learn More",
  },
  {
    image:
      "https://images.pexels.com/photos/5303515/pexels-photo-5303515.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Unlock your potential with our diverse range of courses.",
    buttonName: "Discover",
  },
  {
    image:
      "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Join us on a journey of knowledge and skill development.",
    buttonName: "Get Started",
  },
];

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  const swiperHeight = 700; // Set your desired height

  return (
    <div>
      <Swiper
        style={{ height: `${swiperHeight}px` }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "rgba(0,0,0,0.8)",
              backgroundBlendMode: "multiply",
              overflow: "hidden",
              height: `${swiperHeight}px`, // Set the height dynamically
            }}
          >
            <div className="carousel-content pt-40 text-white w-10/12 h-full m-auto text-center flex flex-col justify-center items-center gap-10">
              <p className="text-5xl md:w-9/12 w-full">{slide.description}</p>
              <button className="border px-5 py-2 rounded-md hover:bg-emerald-500 delay-200 transition-opacity">
                {slide.buttonName}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
