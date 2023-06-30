import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faTaxi,
  faCar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import { format } from "date-fns";
import { useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext.jsx";
import { AuthContext } from "../Context/AuthContext.jsx";
import HeaderSearch from "./HeaderSearch.jsx";
import "./Header.css";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    room: 1,
    children: 0,
  });

  const handleOptiom = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  //conextapi
  const { user } = useContext(AuthContext);

  return (
    <div
      className="md:mx-20 sm:mx-10 border-2 h-[20rem] md:h-[30rem] rounded"
      style={{
        backgroundImage: `url(${"/images/hotel-2.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
      }}
    >
      {/* <img
        src="/images/hotel1.jpg"
        className=" w-100 -z-1 position-absolute"
        alt=""
      /> */}
      {type !== "list" && (
        <div className="mx-10 gap-20">
          <div className="flex flex-col items-center sm:gap-2  md:pt-20 md:gap-10 ">
            <div className="gap-10 p-2 md:p-10 mx-auto text-center">
              <h1 className="text-2xl md:text-4xl w-full   font-bold font-titlefont">
                A lifetime of discounts? It's a Genius{" "}
              </h1>
              <p className="text-lg md:text-xl  font-bodyfont2">
                Get rewarded for your travels + unlock instant savings of 10% or
                with a free account
              </p>
            </div>
            <div>
              {user ? (
                <h3 className="text-xl font-bold font-titleFont hidden md:flex">
                  Welcome {user.username}
                </h3>
              ) : (
                <div className="mx-auto">
                  <button
                    className=" btn btn-primary "
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Sign in / Register
                  </button>
                </div>
              )}
            </div>
          </div>

          <HeaderSearch />
        </div>
      )}
    </div>
  );
}

export default Header;
