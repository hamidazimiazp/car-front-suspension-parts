import { Route, Routes } from "react-router-dom";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import NotFoundPage from "pages/404/404";
import HomePage from "pages/HomePage/HomePage";
import propTypes from "prop-types";
import Layout from "layouts/main/Layout";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";

const Router = ({ ThemeHandler }) => {
  return (
    <Routes>
      <Route
        index
        element={
          <Layout ThemeHandler={ThemeHandler}>
            <HomePage PageTitle="صفحه اصلی" />
          </Layout>
        }
      />
      <Route
        path="/dashboard/"
        element={<DashboardPage PageTitle="داشبورد" />}
      />
      <Route
        path="/auth/login/"
        element={
          <Layout ThemeHandler={ThemeHandler}>
            <Login PageTitle="ورود" />
          </Layout>
        }
      />
      <Route
        path="/auth/register/"
        element={
          <Layout ThemeHandler={ThemeHandler}>
            <Register PageTitle="ثبت نام" />
          </Layout>
        }
      />
      <Route path="*" element={<NotFoundPage title="پیدا نشد!!!" />} />
    </Routes>
  );
};

export default Router;

Router.propTypes = {
  ThemeHandler: propTypes.func,
};
