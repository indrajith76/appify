import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppsDetails from "../pages/AppsDetails/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Apps",
        Component: Apps,
      },
      {
        path: `app-details/:id`,
        Component: AppsDetails,
      },
      {
        path: "Installation",
        Component: Installation,
      },
    ],
  },
]);
