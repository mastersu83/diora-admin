import { Outlet } from "react-router-dom";
import classes from "../../App.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
