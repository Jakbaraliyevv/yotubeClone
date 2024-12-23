import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tranding from "../pages/tranding";
import Obunalar from "../pages/obunalar";
import Kutubxona from "../pages/kutubxona";
import Historiy from "../pages/history";
import Videos from "../pages/videos";
import Watch from "../pages/watch";
import Like from "../pages/like";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/tranding",
        element: <Tranding />,
      },
      {
        path: "/obunalar",
        element: <Obunalar />,
      },
      {
        path: "/kutubxona",
        element: <Kutubxona />,
      },
      {
        path: "/history",
        element: <Historiy />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },

      {
        path: "/like",
        element: <Like />,
      },
    ],
  },
]);

export default root;
