import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menubar, setMenuBar] = useState(true);

  return (
    <div className="bg-slate-100">
      <div
        onClick={() => {
          setMenuBar(!menubar);
        }}
        className="md:hidden container pt-2"
      >
        {menubar ? <FaBars /> : <FaTimes />}
      </div>

      <div
        className={`flex
       flex-col
      md:flex-row
       items-start
        lg:justify-between
        lg:items-center
        py-4
         container
         mx-auto
          ${menubar ? "transition  absolute md:relative -top-40 md:top-0 " : "relative top-0"}
            `}
      >
        <div>
          <Link to="/">
            <span className="hidden md:block text-lg font-semibold text-gray-700">
              Chakri-Loaw
            </span>
          </Link>
        </div>
        <div>
          {/* text-gray-600 flex flex-col md:flex-row gap-1 lg:gap-4 */}
          <div className="text-gray-600 flex flex-col md:flex-row gap-1 lg:gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/appliedjobs">Applied Jobs</NavLink>
          </div>
        </div>

        <div>
          <Link to="/star-apply">
            <button className="hidden md:block lg:mt-0 mt-4  btn-primary">
              Start Applying
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
