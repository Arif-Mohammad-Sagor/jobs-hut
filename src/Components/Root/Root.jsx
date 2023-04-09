import React from 'react'
import Header from '../Header.jsx/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  );
}

export default Root