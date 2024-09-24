import Layout from "layouts/main/Layout";
import MainRouter from "./router/MainRouter";
import DashboardRouter from "./router/DashboardRouter";

const App = () => {
  return (
    <>
      <Layout>
        <MainRouter />
        <DashboardRouter />
      </Layout>
    </>
  );
};

export default App;
