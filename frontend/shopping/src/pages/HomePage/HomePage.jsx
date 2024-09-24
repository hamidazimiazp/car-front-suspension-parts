import HomePageTemp from "components/templates/HomePage/HomePageTemp";
import useTitle from "utils/hooks/useTitle";
import propTypes from "prop-types";
import Layout from "layouts/main/Layout";

const HomePage = ({ PageTitle }) => {
  useTitle(PageTitle);

  return (
    <Layout>
      <HomePageTemp />
    </Layout>
  );
};

export default HomePage;

HomePage.propTypes = {
  PageTitle: propTypes.string,
};
