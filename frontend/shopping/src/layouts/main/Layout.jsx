import Footer from "./Footer";
import Header from "./Header";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
};
