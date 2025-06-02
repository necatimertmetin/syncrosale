import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Landing } from "../pages/Landing/Landing";

export const SyncrosaleRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
