import { createBrowserRouter } from "react-router-dom";
import {
  Attendance,
  AttendanceGroup,
  Dashboard,
  Home,
  Login,
  NotFound,
  Register,
  Settings,
} from "@/pages";
import { Sidebar } from "@/layout";
import { ROUTES } from "./routes";

const router = [
  {
    element: <Login />,
    path: ROUTES.LOGIN,
  },
  {
    element: <Register />,
    path: ROUTES.REGISTER,
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUNT,
  },
  {
    element: <Home />,
    path: ROUTES.HOME,
  },
  {
    element: <Sidebar />,
    path: ROUTES.HOME,
    children: [
      {
        element: <Dashboard />,
        path: ROUTES.DASHBOARD,
      },
      {
        element: <AttendanceGroup />,
        path: ROUTES.ATTENDANCE_GROUP,
        children: [
          {
            element: <Attendance />,
            path: ROUTES.ATTENDANCE,
          },
        ],
      },
      {
        element: <Settings />,
        path: ROUTES.SETTINGS,
      },
      {
        element: <Settings />,
        path: ROUTES.USERS,
      },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
