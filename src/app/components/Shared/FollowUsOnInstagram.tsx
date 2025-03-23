"use client";

import React from "react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeInUpAnimation from "../Animations/FadeInUpAnimation";
import FadeInDownAnimation from "../Animations/FadeInDown";
import Image from "next/image";
import { followUsData } from "@/app/data/data";
import { FaInstagram } from "react-icons/fa";

const FollowUsOnInstagram = () => {
  return (
    <section className="relative py-16 bg-slate-100" id="portfolio">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <FadeInUpAnimation>
            <h6 className="text-red-600 text-sm font-bold uppercase mb-2">
              Explore More
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Follow Us On Instagram
            </h3>
          </FadeInUpAnimation>
        </div>
        <FadeInDownAnimation>
          <Swiper
            spaceBetween={10}
            slidesPerView={1} // Default for mobile
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {followUsData.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className="w-full bg-red-100 relative group">
                  <Image
                    src={item.image}
                    height={278}
                    width={347}
                    alt="Instagram post"
                    className="w-full h-auto"
                  />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center text-xl bg-gray-800 text-white font-semibold">
                    <Link
                      href="https://www.instagram.com/3dition_workshop/"
                      className="text-5xl"
                      target="blank"
                      rel="nofollow"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInDownAnimation>
      </div>
    </section>
  );
};

export default FollowUsOnInstagram;
