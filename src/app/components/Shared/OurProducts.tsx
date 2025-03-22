"use client";
import React from "react";
import FadeInUpAnimation from "../Animations/FadeInUpAnimation";
import FadeInDownAnimation from "../Animations/FadeInDown";
import Gallery from "./Gallery";
const OurProducts = () => {
  return (
    <section className=" relative  py-16 bg-slate-100" id="gallery">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <FadeInUpAnimation>
            <h6 className="text-red-600 text-sm font-bold uppercase mb-2">
              Step Into Quality{" "}
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Have A Deep Seek
            </h3>
          </FadeInUpAnimation>
          <FadeInUpAnimation>
            <p className="text-slate-400 max-w-xl mx-auto">
              premium craftsmanship and timeless design in every piece.
            </p>
          </FadeInUpAnimation>
        </div>
        <FadeInDownAnimation>
          <Gallery />
        </FadeInDownAnimation>
      </div>
    </section>
  );
};

export default OurProducts;
