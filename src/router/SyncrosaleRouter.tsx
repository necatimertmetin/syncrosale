import { Routes, Route, HashRouter } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Routes as SyncrosaleRoutes } from "./Routes";
import { ErrorPage } from "../pages/error/Error";

export const SyncrosaleRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {SyncrosaleRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
