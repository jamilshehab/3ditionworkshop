"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import { ourProductsItem, productImage } from "@/app/data/data";
import { FiCamera } from "react-icons/fi";

export default function Gallery() {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [isImage, setIsImage] = useState(false);

  let handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + productImage.length - 1) % productImage.length
    );
  };

  let handleMoveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImage.length);
  };
  let handleImageClick = (index: any) => {
    setCurrentImageIndex(index);
    setIsImage(true);
  };
  let currentImage = productImage[currentImageIndex];

  return (
    <div className="flex flex-wrap  gap-6 mt-8 justify-center">
      {ourProductsItem.slice(0, 8).map((item, index) => {
        return (
          <div className="w-full   lg:w-1/3  " key={index}>
            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "suto" }}
                className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

              <div className="content">
                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                  <Link
                    href="#"
                    onClick={() => handleImageClick(index)}
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="w-4 h-4" />
                  </Link>
                </div>

                <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                  <Link
                    href="/portfolio-detail-one"
                    className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                  <p className="text-slate-100 tag mb-0">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {isImage && (
        <Lightbox
          mainSrc={currentImage}
          prevSrc={
            productImage[
              (currentImageIndex + productImage.length - 1) %
                productImage.length
            ]
          }
          nextSrc={productImage[(currentImageIndex + 1) % productImage.length]}
          onCloseRequest={() => setIsImage(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
