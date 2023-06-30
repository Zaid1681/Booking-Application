// import React from "react";
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

// import { format } from "date-fns";

const HeaderSearch = () => {
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

  return (
    <div>
      <div className=" font-bodyfont2 flex w-full    mx-auto flex-col lg:flex-row md:gap-10 gap-2  md:p-10 bg-white shadow-md rounded   z-10 md:top-[6rem]  lg:top-[10rem] position-relative text-black md:mb-10 ">
        <div className="headerSearchItem border-2  font-bodyfont2 p-2 rounded">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            className="headerSearchInput border-2 w-full"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            placeholder="Where are you from "
          />
        </div>

        <div className="headerSearchItem border-2 font-bodyfont2 z-10 text-black rounded cursor-pointer  p-2">
          <FontAwesomeIcon icon={faCalendarDays} className="headerFontIcon" />
          <span onClick={() => setOpenDate(!openDate)} className="z-10">
            {" "}
            {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )} `}{" "}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              minDate={new Date()}
              className="date"
            />
          )}
        </div>

        <div className="headerSearchItem">
          <div className="flex items-center gap-2 border-2 p-2 rounded cursor-pointer">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOption(!openOption)} className="">
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
          </div>

          {openOption && (
            <div className="options text-xl font-bodyfont2  ">
              <div className="optionText ">
                <span className="optionText">Adult</span>
                <button
                  disabled={options.adult <= 1}
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("adult", "d");
                  }}
                >
                  -
                </button>
                <span className="">{options.adult}</span>
                <button
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("adult", "i");
                  }}
                >
                  +
                </button>
              </div>
              <div className="optionText">
                <span className="optionText">children</span>
                <button
                  disabled={options.children <= 0}
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("children", "d");
                  }}
                >
                  -
                </button>
                <span className="">{options.children}</span>
                <button
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("children", "i");
                  }}
                >
                  +
                </button>
              </div>
              <div className="optionText">
                <span className="optionText">Room</span>
                <button
                  disabled={options.room <= 1}
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("room", "d");
                  }}
                >
                  -
                </button>
                <span className="">{options.room}</span>
                <button
                  className="optoinCounterButton"
                  onClick={() => {
                    handleOptiom("room", "i");
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button
            type="button"
            className="text-white bg-blue-7 00 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-bodyfont2 text-md mx-10  "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
