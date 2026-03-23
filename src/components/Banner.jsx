import React from "react";

const Banner = () => {
  return (
    <div>
      <h1 className="mt-20 text-center text-[72px] font-bold leading-21 text-[#001931]">
        We Build <br />
        <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-purple-400">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-center mt-4 text-xl text-gray-500 leading-8">
        At Appify, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex items-center justify-center gap-5 my-10">
        <button className="btn">
          <img src="/public/assets/playstore.png" alt="" /> Google Play
        </button>
        <button className="btn">
          <img src="/public/assets/appStore.png" alt="" /> App Store
        </button>
      </div>
      <img src="/public/assets/hero.png" className="mx-auto" alt="" />
    </div>
  );
};

export default Banner;
