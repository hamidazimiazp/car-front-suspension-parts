import { Link } from "react-router-dom";

const HomePageTemp = () => {
  return (
    <div>
      خانه
      <br />
      <br />
      <Link to="/dashboard">Go To Dashboard</Link>
    </div>
  );
};

export default HomePageTemp;
