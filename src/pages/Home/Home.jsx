import React from "react";
import Banner from "../../components/Banner";
import TrendingApps from "./TrendingApps";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="py-20 bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)]">
        <h3 className="text-[48px] text-white font-bold text-center">
          Trusted by Millions, Built for You
        </h3>
        <div className="lg:flex items-center gap-48 justify-center mt-10">
          <div className="text-center text-white">
            <p>Total Downloads</p>
            <p className="font-extrabold text-[64px] text-white leading-[72px]">
              29.6M
            </p>
            <p>21% more than last month</p>
          </div>
          <div className="text-center text-white">
            <p>Total Reviews</p>
            <p className="font-extrabold text-[64px] text-white leading-[72px]">
              906K
            </p>
            <p>46% more than last month</p>
          </div>
          <div className="text-center text-white">
            <p>Active Apps</p>
            <p className="font-extrabold text-[64px] text-white leading-[72px]">
              132+
            </p>
            <p>31 more will Launch</p>
          </div>
        </div>
      </section>
      <TrendingApps /> 
    </div>
  );
};

export default Home;
