import React, { useContext } from "react";
import { InstallAppContext } from "../../contexts/InstallAppProvider";
import toast from "react-hot-toast";

const InstalledAppsCard = ({ app }) => {
  const { installedApps, infoStatus, setInfoStatus } =
    useContext(InstallAppContext);

  const calculateAvgRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;

    let totalScore = 0;
    let totalCount = 0;

    ratings.forEach((r) => {
      totalScore += parseInt(r.name) * r.count;
      totalCount += r.count;
    });

    return (totalScore / totalCount).toFixed(1);
  };

  const avgRating = calculateAvgRating(app.ratings);

  const handleUninstallApp = () => {
    const remainApps = installedApps.filter((appId) => appId !== app.id);
    localStorage.setItem("installed_Apps", JSON.stringify(remainApps));
    setInfoStatus(!infoStatus);
    toast.success(`Successfully Unistalled ${app.title} app!`);
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-sm mb-5 w-full border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-md">
          <img src={app.image} alt="" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">{app.title}</h2>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1 text-[#00D390] font-medium">
              <img src="/assets/icon-downloads.png" className="w-3" alt="" />{" "}
              {app.downloads}
            </span>

            <span className="flex items-center gap-1 text-yellow-500 font-medium">
              <img className="w-3" src="/assets/icon-ratings.png" alt="" />{" "}
              {avgRating}
            </span>

            <span>{app.size} MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleUninstallApp}
        className="bg-[#00D390] hover:bg-[#00eca2] cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppsCard;
