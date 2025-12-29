import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Routes as SyncrosaleRoutes } from "./Routes";
import { ErrorPage } from "../pages/error/Error";

export const SyncrosaleRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<PageLayout />}>
          {SyncrosaleRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* GLOBAL 404 CATCHER */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
