import { Route, Routes } from "react-router-dom";
import HomePage from "src/pages/HomePage/HomePage";

const router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default router;
