import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER } from "../utils/constants/routerConstant";

import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthGuard from "../guard/AuthGuard";

import LoginScreen from "../pages/LoginPage";
import DashboadPage from "../pages/DashboardPage";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTER.LOGIN.path}
        element={
          <AuthLayout>
            <LoginScreen />
          </AuthLayout>
        }
      />

      <Route
        path={ROUTER.DASHBOARD.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <DashboadPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />
    </Routes>
  );
};
