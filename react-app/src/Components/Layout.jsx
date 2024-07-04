import React from 'react';
import { Outlet } from 'react-router-dom'; // Ensure Outlet is imported correctly

import Header from './Header';
import Footer from './Footer';
import darkMode from '../darkMode';

const Layout = ({ }) => {
  return (
    <>
    
    <div>
      <Header />
      <darkMode />
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