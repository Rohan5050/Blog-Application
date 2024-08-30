import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import darkMode from "../ThemeToggler";

const Layout = ({}) => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

/*import React from 'react'
import {Outlet} from "react-router-dom"

import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
          <Header/>
             <Outlet/>
          <Footer/>
    </>
  )
}

export default Layout*/
