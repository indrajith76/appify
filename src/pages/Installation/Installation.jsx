import { useContext, useEffect, useState } from "react";
import { InstallAppContext } from "../../contexts/InstallAppProvider";
import InstalledAppsCard from "./InstalledAppsCard";
import LinkBtn from "../../components/LinkBtn";
import AppNotFound from "../../components/AppNotFound";

const Installation = () => {
  const [allApps, setAllApps] = useState([]);
  const { installedApps } = useContext(InstallAppContext);
  const [installedAppsList, setInstalledAppsList] = useState([]);

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(data);
      });
  }, []);

  useEffect(() => {
    const installed = allApps.filter((app) => installedApps.includes(app.id));
    setInstalledAppsList(installed);
  }, [allApps, installedApps]);

  const handleSortBySize = (text) => {
    let sorted = [...installedAppsList];

    if (text === "Low to High") {
      sorted.sort((a, b) => a.size - b.size);
    }

    if (text === "High to Low") {
      sorted.sort((a, b) => b.size - a.size);
    }

    setInstalledAppsList(sorted);
  };

  return (
    <>
      {!installedApps.length ? (
        <AppNotFound />
      ) : (
        <div className="flex flex-col px-5 lg:px-0">
          <h3 className="text-3xl lg:text-5xl font-bold text-[#001931] mt-20 text-center">
            Your Installed Apps
          </h3>
          <p className="text-center text-[#627382] lg:text-xl mt-4 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="mx-auto container flex items-center justify-between mb-5">
            <p className="text-xl font-semibold">
              ({installedAppsList.length}) Apps Found
            </p>
            <select
              onChange={(e) => handleSortBySize(e.target.value)}
              defaultValue="Pick a color"
              className="select w-37.5"
            >
              <option disabled={true}>Sort By Size</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>

          <div className="container mx-auto mb-10 ">
            {installedAppsList.map((app) => (
              <InstalledAppsCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Installation;
