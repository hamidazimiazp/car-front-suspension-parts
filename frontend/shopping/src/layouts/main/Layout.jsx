import Footer from "./Footer";
import Header from "./Header";
import propTypes from "prop-types";

const Layout = ({ ThemeHandler, children }) => {
  return (
    <>
      <Header ThemeHandler={ThemeHandler} />
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  ThemeHandler: propTypes.func,
  children: propTypes.node,
};
