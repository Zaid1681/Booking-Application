import React from "react";
import Navbar from "../../Component/Navbar.jsx";
import Header from "../../Component/Header.jsx";
import "./List.css";
import Featured from "../../Component/Featured/Featured.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import ListResult from "../../Component/ListResult/ListResult.jsx";
import UseFetch from "../../Hooks/UseFetch.jsx";

function List() {
  const location = useLocation();
  // console.log(location)
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState();
  const [destination, setdestination] = useState(location.state.destination);
  const [option, setoption] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // console.log(location);  //by suing destication we are just d=getting all the data of state

  // hitting at the url where user is putting the destination and max , min
  const { data, loading, error } = UseFetch(
    `/api/hotels/find/?city=${destination}`
  );
  // const maindata = data.hotels
  // console.log(maindata);

  const handleClick = () => {
    console.log("handle click");
  };

  return (
    <div type="list">
      <Navbar />
      <div className="listHeader">{/* <Header type="list" /> */}</div>

      <div className="">
        <div className=" md:flex  mx-10 gap-10">
          <div className="bg-green md:flex flex-col  hidden  w-[30%] h-[90vh] mt-2 rounded shadow-md  bg-textLight border-2 p-10">
            <h1 className="text-xl font-bold font-titleFont">Search</h1>
            <div className="lsItem">
              <label htmlFor=""> Destination</label>
              <input
                type="text"
                className="p-1 rounded"
                placeholder={destination}
              />
            </div>
            <div className="lsItem IsDate">
              <label htmlFor=""> Check In date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  onchange={(item) => {
                    setDates([item.selection]);
                  }}
                  minDate={new Date()}
                  range={dates}
                />
              )}
              <span className="options1">Options</span>
              <div className="optionsDetails">
                <p>Min price (per day) </p>
                <input
                  type="number"
                  className="p-1 rounded"
                  onClick={(e) => {
                    setMin(e.target.value);
                  }}
                />
              </div>
              <div className="optionsDetails">
                <p>Max price (per day) </p>
                <input
                  type="number"
                  className="p-1 rounded"
                  onClick={(e) => {
                    setMax(e.target.value);
                  }}
                />
              </div>
              <div className="optionsDetails">
                <p>Adult</p>
                <input
                  type="number"
                  className="p-1 rounded"
                  min={1}
                  placeholder={option.adult}
                />
              </div>
              <div className="optionsDetails">
                <p>Childrens</p>
                <input
                  type="number"
                  className="p-1 rounded"
                  min={0}
                  placeholder={option.children}
                />
              </div>
              <div className="optionsDetails">
                <p>Room</p>
                <input
                  min={0}
                  type="number"
                  className="p-1 rounded"
                  placeholder={option.room}
                />
              </div>
              <div className="optionsButton">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-bodyfont2 text-md"
                  onClick={handleClick}
                >
                  {" "}
                  Search{" "}
                </button>
              </div>
            </div>
            {/* <h1  className='options'>Options</h1> */}
          </div>

          <div className="w-full mt-2">
            {
              <div className="listResult">
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {data.hotels?.map((item) => (
                      <ListResult item={item} />
                    ))}
                  </>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
