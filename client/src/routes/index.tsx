import { createBrowserRouter } from "react-router-dom";
import {
  Attendance,
  AttendanceGroup,
  Dashboard,
  Login,
  NotFound,
  Register,
  Settings,
} from "@/pages";
import { Sidebar } from "@/layout";

const router = [
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <NotFound />,
    path: "*",
  },
  {
    element: <Sidebar />,
    path: "/",
    children: [
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
      {
        element: <AttendanceGroup />,
        path: "/attendance-group",
        children: [
          {
            element: <Attendance />,
            path: ":attendance",
          },
        ],
      },
      {
        element: <Settings />,
        path: "/settings",
      },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
