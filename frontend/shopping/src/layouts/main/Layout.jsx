import Footer from "./Footer";
import Header from "./Header";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
};
