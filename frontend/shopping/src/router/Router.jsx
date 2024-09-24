import { Route, Routes } from "react-router-dom";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import NotFoundPage from "pages/404/404";
import HomePage from "pages/HomePage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage PageTitle="صفحه اصلی" />} />
      <Route
        path="/dashboard"
        element={<DashboardPage PageTitle="داشبورد" />}
      />
      <Route path="*" element={<NotFoundPage title="پیدا نشد!!!" />} />
    </Routes>
  );
};

export default Router;
