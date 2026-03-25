import React, { createContext, useEffect, useState } from "react";

export const InstallAppContext = createContext();

const InstallAppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const [infoStatus, setInfoStatus] = useState(false);

  useEffect(() => {
    const installedAppsId = JSON.parse(localStorage.getItem("installed_Apps"));
    if (installedAppsId) {
      setInstalledApps(installedAppsId);
    }
  }, [infoStatus]);

  const installedAppsInfo = {
    installedApps,
    setInstalledApps,
    infoStatus,
    setInfoStatus,
  };

  return (
    <InstallAppContext value={installedAppsInfo}>{children}</InstallAppContext>
  );
};

export default InstallAppProvider;
