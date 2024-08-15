import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";

export const PublicRoute = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
