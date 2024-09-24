import HomePageTemp from "components/templates/HomePage/HomePageTemp";
import useTitle from "utils/hooks/useTitle";
import propTypes from "prop-types";

const HomePage = ({ PageTitle }) => {
  useTitle(PageTitle);

  return <HomePageTemp />;
};

export default HomePage;

HomePage.propTypes = {
  PageTitle: propTypes.string,
};
