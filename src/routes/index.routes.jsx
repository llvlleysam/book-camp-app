import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./public.routes";
import { AppRoutes } from "../config/Routes";
import React from "react";
import { PrivateRoute } from "./private.routes";
import { ProtectedRoute } from "./protected.routes";

const HomePageLazy = React.lazy(() => import("../pages/HomePage"));
const AboutPageLazy = React.lazy(() => import("../pages/AbouteUsPage"));
const ContactUsPageLazy = React.lazy(() => import("../pages/ContactUsPage"));
const LoginPageLazy = React.lazy(() => import("../pages/LoginPage"));
const SingUpPageLazy = React.lazy(() => import("../pages/SingInPage"));
const SingleDisplayPageLazy = React.lazy(() =>
  import("../pages/SingleDisplayCard")
);
const BootCampsPageLazy = React.lazy(() => import("../pages/BootCamps"));

export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={AppRoutes.HOME} element={<HomePageLazy />} />
          <Route path={AppRoutes.ABOUT} element={<AboutPageLazy />} />
          <Route path={AppRoutes.CONTACT} element={<ContactUsPageLazy />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={AppRoutes.BOOTCAMP} element={<BootCampsPageLazy />} />
          <Route
            path={AppRoutes.SINGLE_CARD}
            element={<SingleDisplayPageLazy />}
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path={AppRoutes.LOGIN} element={<LoginPageLazy />} />
          <Route path={AppRoutes.SIGN_UP} element={<SingUpPageLazy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
