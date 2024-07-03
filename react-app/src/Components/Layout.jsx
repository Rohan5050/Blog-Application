import React from 'react';
import { Outlet } from 'react-router-dom'; // Ensure Outlet is imported correctly

import Header from './Header';
import Footer from './Footer';

const Layout = ({  }) => {
  return (
    <>
      <Header />
        <Outlet /> {/* Render child routes */}
      <Footer />
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