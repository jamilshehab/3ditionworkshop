"use client";
import React from "react";
import Link from "next/link";
import "swiper/css";
import FadeInLeftAnimation from "../Animations/FadeInLeftAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const HomeBanner = () => {
  return (
    <section className="main home-section" id="home">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        parallax={true}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".home-image-swiper-button-next",
          prevEl: ".home-image-swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div
            className="relative md:pt-60 pt-40 md:pb-74 pb-56 flex items-center bg-center bg-no-repeat bg-cover jarallax !bg-fixed "
            style={{
              backgroundImage: "url('/HomeBanner/1.jpg')",
              backgroundAttachment: `fixed !important`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
              <div className="md:flex justify-center mt-10">
                <div className="w-full text-center lg:text-start">
                  <FadeInLeftAnimation>
                    <h2 className="font-bold text-white leading-snug text-[30px] lg:text-[42px] mt-6 block">
                      Limitless Possibilities, Perfect Creations
                    </h2>
                  </FadeInLeftAnimation>
                  <FadeInLeftAnimation>
                    <div className="mt-8">
                      <Link
                        href="#"
                        className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary  hover:bg-red-700   hover:border-red-700 text-white rounded-md"
                      >
                        Contact Us{" "}
                      </Link>
                    </div>
                  </FadeInLeftAnimation>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative md:pt-60 pt-40 md:pb-74 pb-56 flex items-center bg-center bg-no-repeat bg-cover jarallax !bg-fixed "
            style={{
              backgroundImage: "url('/HomeBanner/2.jpg')",
              backgroundAttachment: `fixed !important`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
              <div className="md:flex justify-center mt-10 ">
                <div className="w-full text-center lg:text-start">
                  <FadeInLeftAnimation>
                    <h2 className="font-bold text-white leading-snug text-[30px] lg:text-[42px] mt-6 block">
                      3D Printing the Future
                    </h2>
                  </FadeInLeftAnimation>
                  <FadeInLeftAnimation>
                    <div className="mt-8">
                      <Link
                        href="#"
                        className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center    bg-primary  hover:bg-red-700   hover:border-red-700 text-white rounded-md"
                      >
                        Contact Us{" "}
                      </Link>
                    </div>
                  </FadeInLeftAnimation>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute md:inset-y-5 left-28 md:left-4 bottom-[80px] md:bottom-0 md:top-0 z-20 md:flex md:items-center ">
          <button className=" home-image-swiper-button-prev  flex justify-center items-center   w-[64px] h-[64px] rounded-full shadow-lg   shadow-[#00000059] focus:outline-nonebg-indigo-700  border-indigo-700 duration-500  ">
            <IoIosArrowBack className="text-md font-light text-white" />
          </button>
        </div>
        <div className="absolute md:inset-y-5 md:right-4 right-28 bottom-[80px] md:bottom-0 md:top-0  z-20 md:flex md:items-center">
          <button className=" home-image-swiper-button-next  flex justify-center items-center  w-[64px] h-[64px] rounded-full shadow-lg   shadow-[#00000059] focus:outline-none bg-indigo-700  border-indigo-700 duration-500  ">
            <IoIosArrowForward className="text-md font-light text-white" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default HomeBanner;
