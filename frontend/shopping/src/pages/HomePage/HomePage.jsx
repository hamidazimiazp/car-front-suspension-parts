import HomePageTemp from "components/templates/HomePage/HomePageTemp";
import useTitle from "utils/hooks/useTitle";

const HomePage = () => {
  useTitle("صفحه اصلی");

  return <HomePageTemp />;
};

export default HomePage;
