import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage PageTitle="صفحه اصلی" />} />
    </Routes>
  );
};

export default Router;
