import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start lg:justify-between lg:items-center mt-4 w-10/12 mx-auto">
      <div>
        <Link to="/">
          <span className="font-semibold text-gray-700">Chakri-Hub</span>
        </Link>
      </div>
      <div>
        <div className="text-gray-600 flex flex-col md:flex-row gap-1 lg:gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/appliedjobs">Applied Jobs</NavLink>
        </div>
      </div>
      <div>
        <Link to="/star-apply">
          <button className=" lg:mt-0 mt-4  btn-primary">
            Start Applying
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
