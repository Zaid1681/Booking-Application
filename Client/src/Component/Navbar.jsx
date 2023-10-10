import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  let Links = [
    { name: "Stays", icon: <FontAwesomeIcon icon={faBed} className='w-5 h-5 text-gray-500' />, link: "/" },
    { name: "Flight", icon: <FontAwesomeIcon icon={faPlane} className='w-5 h-5 text-gray-500' />, link: "/" },
    { name: "Car rentals", icon: <FontAwesomeIcon icon={faCar} className='w-5 h-5 text-gray-500' />, link: "/" },
    { name: "Attraction", icon: <FontAwesomeIcon icon={faBed} className='w-5 h-5 text-gray-500' />, link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='header-container shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <BookOpenIcon className='w-7 h-7 text-blue-600' />
          <span>Book your hotel</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='menu-icon absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold flex items-center hover:bg-gray-100 transition duration-300'>
              {link.icon}
              <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500 ml-2'>{link.name}</a>
            </li>
          ))}
          <Link to="/login">
          <button  className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-blue-700 transition duration-300'>Login</button>
          </Link>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
