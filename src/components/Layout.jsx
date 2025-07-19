import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- import Outlet
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />  {/* Correct spelling and capitalization */}
      <Footer />
    </div>
  );
};

export default Layout;
