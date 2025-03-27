import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";

const Banner = () => {
  const slides = [banner1, banner2, banner3, banner4];

  return (
    <div className="relative">
      {/* Swiper for Image Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[400px] md:h-[350px] lg:h-[700px]"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Overlay & Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 z-10">
        <h1 className="text-xl md:text-7xl font-bold">Welcome to IKS</h1>
        <p className="mt-3 text-lg md:text-xl">
          Leading commercial food service equipment in India.
        </p>
        <div className="mt-5 flex gap-4">
          <a
            href="/gallery"
            className="bg-white text-gray-900 px-5 py-2 md:px-10 md:py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
          >
            GALLERY
          </a>
          <a
            href="#about-us"
            className="bg-orange-500 text-white px-5 py-2 md:px-10 md:py-3 rounded-lg font-medium hover:bg-orange-600 transition duration-300"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
