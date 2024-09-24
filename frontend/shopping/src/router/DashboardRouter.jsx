import { Route, Routes } from "react-router-dom";
import DashboardPage from "pages/DashboardPage/DashboardPage";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<DashboardPage PageTitle="داشبورد" />}
      />
    </Routes>
  );
};

export default DashboardRouter;
