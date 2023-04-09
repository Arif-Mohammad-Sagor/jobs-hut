import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root from './Components/Root/Root'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element:<Home/>
    },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: '/appliedjobs',
        element:<AppliedJobs/>}
   ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
