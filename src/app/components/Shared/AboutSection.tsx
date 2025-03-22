"use client";
import Image from "next/image";
import React from "react";
import FadeInLeftAnimation from "../Animations/FadeInLeftAnimation";
import FadeInUpAnimation from "../Animations/FadeInUpAnimation";
const AboutSection: React.FC = () => {
  return (
    <section
      className="relative  py-16 bg-gray-50 dark:bg-slate-800"
      id="about"
    >
      <div className="container relative  ">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="lg:col-span-6 md:order-2 order-1">
            <FadeInLeftAnimation>
              <Image
                src="/about/1.jpg"
                width={500}
                height={500}
                alt=""
                className="rounded-lg"
              />
            </FadeInLeftAnimation>
          </div>
          <div className="lg:col-span-6 md:order-1 order-2">
            <FadeInUpAnimation>
              <div className="lg:me-10">
                <h2 className="mb-6 md:text-3xl text-4xl md:leading-normal leading-normal">
                  Why Choose Us
                </h2>
                <p className="text-slate-600 max-w-xl text-justify">
                  At 3dition, we believe in the power of creativity and
                  innovation. We specialize in turning unique ideas into reality
                  with our high-quality 3D-printed designs. Our products are
                  more than just items—they are expressions of craftsmanship,
                  precision, and imagination. From custom creations to
                  functional art pieces, every product is thoughtfully crafted
                  to add value and style to your life. With a focus on quality
                  and detail, 3dition offers a wide range of 3D-printed designs
                  that are perfect for enhancing any space. Whether you're
                  looking for something functional, decorative, or completely
                  personalized, we’re here to bring your ideas to life. Let us
                  help you discover a new world of possibilities through the art
                  of 3D printing.
                </p>
              </div>
            </FadeInUpAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
