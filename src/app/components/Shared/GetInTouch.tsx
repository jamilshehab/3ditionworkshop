"use client";

import Link from "next/link";
import React from "react";
import FadeInUpAnimation from "../Animations/FadeInUpAnimation";

const GetInTouch = () => {
  return (
    <section
      className=" w-full  h-[70vh] relative jarallax bg-fixed bg-cover"
      style={{ background: `url('/HomeBanner/2.jpg') center` }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative flex items-center justify-center h-full">
        <div className="text-center">
          <FadeInUpAnimation>
            <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">
              Train With Us.
            </h3>
          </FadeInUpAnimation>
          <FadeInUpAnimation>
            <p className="text-white/80 max-w-xl mx-auto">
              Train With Us And Unleash Your Strength: Transform Your Body,
              Elevate Your Life What Are You Waiting For.
            </p>
          </FadeInUpAnimation>
          <FadeInUpAnimation>
            <div className="relative mt-8">
              <Link
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-[#a7a2f2] hover:bg-indigo-700 border-[#a7a2f2] hover:border-indigo-700 text-white rounded-md"
              >
                Join Now
              </Link>
            </div>
          </FadeInUpAnimation>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
