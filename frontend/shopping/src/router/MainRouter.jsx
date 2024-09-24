import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage PageTitle="صفحه اصلی" />} />
    </Routes>
  );
};

export default MainRouter;
