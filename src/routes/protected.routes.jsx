import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../config/Routes";

export const ProtectedRoute = () => {
  if (localStorage.accessToken) {
    return <Navigate to={AppRoutes.BOOTCAMP} />;
  } else {
    return <Outlet />;
  }
};
