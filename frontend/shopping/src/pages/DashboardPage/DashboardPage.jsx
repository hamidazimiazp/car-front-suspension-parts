import useTitle from "utils/hooks/useTitle";
import propTypes from "prop-types";
import DashboardPageTemp from "components/templates/DashboardPage/DashboardPageTemp";
import { useQuery } from "@tanstack/react-query";
import { whoAmI } from "services/user";

const DashboardPage = ({ PageTitle }) => {
  useTitle(PageTitle);

  const { data, isPending } = useQuery({
    queryKey: ["whoami"],
    queryFn: async () => await whoAmI(),
  });

  console.log(data?.response?.data, isPending);

  return <DashboardPageTemp />;
};

export default DashboardPage;

DashboardPage.propTypes = {
  PageTitle: propTypes.string,
};
