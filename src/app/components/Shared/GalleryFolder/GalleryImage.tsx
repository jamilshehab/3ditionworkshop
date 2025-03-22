"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import { gymImage, portfolioImage, portofolioItem } from "@/app/data/data";
import { FiCamera } from "react-icons/fi";

export default function Gallery() {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [isImage, setIsImage] = useState(false);

  let handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + portfolioImage.length - 1) % portfolioImage.length
    );
  };

  let handleMoveNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % portfolioImage.length
    );
  };
  let handleImageClick = (index: any) => {
    setCurrentImageIndex(index);
    setIsImage(true);
  };
  let currentImage = portfolioImage[currentImageIndex];

  return (
    <section className="relative md:py-24 py-16">
      <div className="container-fluid relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h5 className="font-semibold text-base text-red-600 mb-2">Gallery</h5>
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Take a Sneak Peek Inside
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Push your fitness further with our mix of facilities and We will
            support you with advice on new and better ways to train.
          </p>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-2 justify-center mx-auto mt-8">
          {gymImage.map((data, index) => {
            return (
              <div
                className="group relative block overflow-hidden transition-all duration-500"
                key={index}
                onClick={() => handleImageClick(index)}
              >
                <Link
                  href="#"
                  onClick={() => handleImageClick(index)}
                  className="lightbox transition-all duration-500 group-hover:scale-105"
                  title=""
                >
                  <Image
                    src={data}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="transition-all duration-500 group-hover:scale-105"
                    alt="Gym Images"
                  />
                </Link>
              </div>
            );
          })}
          {isImage && (
            <Lightbox
              mainSrc={currentImage}
              prevSrc={
                gymImage[
                  (currentImageIndex + gymImage.length - 1) % gymImage.length
                ]
              }
              nextSrc={gymImage[(currentImageIndex + 1) % gymImage.length]}
              onCloseRequest={() => setIsImage(false)}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </div>
    </section>
  );
}
