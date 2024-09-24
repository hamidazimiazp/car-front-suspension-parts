import useTitle from "utils/hooks/useTitle";
import propTypes from "prop-types";
import DashboardPageTemp from "components/templates/DashboardPage/DashboardPageTemp";

const DashboardPage = ({ PageTitle }) => {
  useTitle(PageTitle);

  return <DashboardPageTemp />;
};

export default DashboardPage;

DashboardPage.propTypes = {
  PageTitle: propTypes.string,
};
