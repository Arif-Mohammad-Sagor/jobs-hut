import React from 'react'
import Header from '../Header.jsx/Header'
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div>
          <Header></Header>
          <Outlet></Outlet>

    </div>
  );
}

export default Root