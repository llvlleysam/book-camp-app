import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../config/Routes";
import Layout from "../Layout/Layout";

export const PrivateRoute = () => {
  if (localStorage.accessToken) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to={AppRoutes.LOGIN} />;
  }
};
