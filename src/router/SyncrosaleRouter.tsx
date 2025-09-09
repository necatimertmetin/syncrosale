import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Routes as SyncrosaleRoutes } from "./Routes";

export const SyncrosaleRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {SyncrosaleRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
