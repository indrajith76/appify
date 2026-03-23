import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const [appData, setAppData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAppData(data);
        setSearchData(data);
      });
  }, []);

  const searchHandler = (text) => {
    const searchedData = appData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );

    setSearchData(searchedData);
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-5xl font-bold text-[#001931] mt-20 text-center">
        Our All Applications
      </h3>
      <p className="text-center text-[#627382] text-xl mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="mx-auto container flex items-center justify-between mb-5">
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

      <div className="container mx-auto grid grid-cols-4 gap-5 mb-10">
        {searchData.map((item, idx) => (
          <AppCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
