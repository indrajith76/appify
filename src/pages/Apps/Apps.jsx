import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard";
import { FaSearch } from "react-icons/fa";
import LinkBtn from "../../components/LinkBtn";
import AppNotFound from "../../components/AppNotFound";

const Apps = () => {
  const [loading, setLoading] = useState(true);
  const [appData, setAppData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAppData(data);
        setSearchData(data);
        setLoading(false);
      });
  }, []);

  const searchHandler = (text) => {
    const searchedData = appData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchData(searchedData);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner text-primary loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-5 lg:px-0">
      <h3 className="text-3xl lg:text-5xl font-bold text-[#001931] mt-20 text-center">
        Our All Applications
      </h3>
      <p className="text-center text-[#627382] text-lg lg:text-xl mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="mx-auto container flex flex-col lg:flex-row items-center justify-between mb-5 gap-5 lg:gap-0">
        <p className="text-xl font-semibold">
          ({searchData.length}) Apps Found
        </p>
        <label className="input">
          <FaSearch className="text-gray-400" />
          <input
            onChange={(e) => searchHandler(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      {!searchData.length && <AppNotFound />}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-5 lg:px-0">
        {searchData.map((item, idx) => (
          <AppCard
            installedApps={installedApps}
            setInstalledApps={setInstalledApps}
            item={item}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Apps;
