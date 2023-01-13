import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";


import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className="navbar bg-transparent lg:w-3/4 mx-auto">
        <div className="navbar-start relative">
        <label
          onClick={() => setOpen(!open)}
          className="btn btn-ghost text-xl md:hidden "
        >
          {open ? <HiOutlineXMark /> : <FaAlignLeft />}
        </label>

        <div
          className="normal-case text-3xl text-white font-serif"
        >
          
          EAZY DMS
        </div>
        
        </div>
        <div className="navbar-center">
        <ul
          className={`md:flex items-center py-8 md:py-0 bg-transparent-10    md:bg-transparent text-gray-300 text-lg md:text-gray-100 font-semibold absolute md:static left-0 md:pl-0 pl-9 w-full md:w-auto transition-all duration-500 ease-in z-10  ${
            open ? "top-24 z-20" : "top-[-600px] "
          }`}
        >
          <li className="p-3 ">
           
          </li>
          <li className="p-3 ">
            <a href="#home">Home</a>
          </li>
          <li className="p-3 ">
            <a href="#about">About</a>
          </li>
          <li className="p-3 ">
            <a href="#contact">Contact</a>
          </li>
   

          
        </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Navbar;