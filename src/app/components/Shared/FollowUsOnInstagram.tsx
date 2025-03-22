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
    <section className=" relative  py-16 bg-slate-100" id="portfolio">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <FadeInUpAnimation>
            <h6 className="text-red-600 text-sm font-bold uppercase mb-2">
              Explore More{" "}
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Follow Us On Instagram
            </h3>
          </FadeInUpAnimation>
        </div>
        <FadeInDownAnimation>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 1,
              },
            }}
          >
            {followUsData.map((item: any) => (
              <SwiperSlide>
                <div className="w-64 bg-red-100 relative group">
                  <Image src={item.image} height={278} width={347} alt="" />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 w-full h-full flex justify-center items-center text-xl bg-gray-800 text-white font-semibold">
                    <Link href="#" className="text-5xl">
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
