// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import content from './data/content.json' ;

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer data = {content.footer} ></Footer>
    </>
  );
};

export default Layout;