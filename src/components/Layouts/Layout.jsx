import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='app-wrapper'>
        <Header/>
        <div className="main">
          <Navbar/>
          <div className='app-content-wrapper'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;