import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faTaxi,
  faCar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
    console.log("logout");
  };

  return (
    <div className="w-full">
      <div className="navContainer">
        {/* <Link to="/"></Link> */}

        <div className="  w-full flex-col lg:flex-row hidden lg:flex  ">
          <div className="w-full flex lg:flex-row flex-col  font-bodyfont2 text-md font-semibold  gap-10 text-center items-center px-14 ">
            <div
              className=" hover:opacity-90 cursor-pointer font-bodyfont2 gap-2  flex items-center"
              active
            >
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div
              className=" hover:opacity-90  cursor-pointer font-bodyfont2 gap-2  flex items-center"
              active
            >
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div
              className=" hover:opacity-90  cursor-pointer font-bodyfont2 gap-2  flex items-center"
              active
            >
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div
              className="  hover:opacity-90 cursor-pointer font-bodyfont2 gap-2  flex items-center"
              active
            >
              <FontAwesomeIcon icon={faBed} />
              <span>Attraction</span>
            </div>
            <div
              className=" hover:opacity-90  cursor-pointer font-bodyfont2 gap-2  flex items-center"
              active
            >
              <FontAwesomeIcon icon={faTaxi} />
              <span>Car Rentals</span>
            </div>
          </div>
          {/* login , logout buttons */}
          <div className="flex items-center justify-center">
            {user ? (
              <div className="navItems">
                <div className="flex gap-5 mr-10 p-2.5 ">
                  <div className="  font-bodyfont gap-3 text-center items-center text-lg flex">
                    <p className="font-bodyfont2 text-lg">Welcome</p>
                    {user.username}
                  </div>{" "}
                  <Link to="/">
                    <button
                      style={{ margin: "10px" }}
                      className="btn btn-primary navbutton"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex p-2.5">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-bodyfont2 text-md"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-bodyfont2 text-md"
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
