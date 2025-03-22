"use client";
import React from "react";
import FadeInUpAnimation from "../Animations/FadeInUpAnimation";
import FadeInDownAnimation from "../Animations/FadeInDown";
import Gallery from "./Gallery";
const FollowUsOnInstagram = () => {
  return (
    <section className=" relative  py-16 bg-slate-100" id="portfolio">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <FadeInUpAnimation>
            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
              Step Into Quality{" "}
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Works & Projects
            </h3>
          </FadeInUpAnimation>
          <FadeInUpAnimation>
            <p className="text-slate-400 max-w-xl mx-auto">
              ObvioExperience premium craftsmanship and timeless design in every
              piece.
            </p>
          </FadeInUpAnimation>
        </div>
        <FadeInDownAnimation>
          <div className="w-64 bg-red-100 relative group">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg" />
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">
              Dwayne
            </div>
          </div>
        </FadeInDownAnimation>
      </div>
    </section>
  );
};

export default FollowUsOnInstagram;
