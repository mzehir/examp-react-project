import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER } from "../utils/constants/routerConstant";

import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthGuard from "../guard/AuthGuard";

import LoginPage from "../pages/LoginPage";
import DashboadPage from "../pages/DashboardPage";
import TypographyPage from "../pages/compPages/TypographyPage";
import TextFieldPage from "../pages/compPages/TextFieldPage";
import ButtonPage from "../pages/compPages/ButtonPage";
import DialogPage from "../pages/compPages/DialogPage";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTER.LOGIN.path}
        element={
          <AuthLayout>
            <LoginPage />
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

      <Route
        path={ROUTER.TYPOGRAPHY.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <TypographyPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />

      <Route
        path={ROUTER.TEXTFIELD.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <TextFieldPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />

      <Route
        path={ROUTER.BUTTON.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <ButtonPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />

      <Route
        path={ROUTER.DIALOG.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <DialogPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />
    </Routes>
  );
};
