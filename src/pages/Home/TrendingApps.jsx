import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAppData(data.slice(0, 8));
      });
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="text-5xl font-bold text-[#001931] mt-20 text-center">
        Trending Apps
      </h3>
      <p className="text-center text-[#627382] text-xl mt-4 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0">
        {appData.map((item, idx) => (
          <AppCard item={item} key={idx} />
        ))}
      </div>
      <Link
        to="/Apps"
        className="btn bg-linear-to-br from-purple-900 to-purple-500 text-white mx-auto mt-10 mb-20"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
