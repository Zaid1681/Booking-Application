import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faTaxi, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";

import { format } from "date-fns"
import { useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext.jsx';
import { AuthContext } from '../Context/AuthContext.jsx';
import "./Header.css"

function Header({ type }) {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [dates, setDates] = useState([

        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

    ]);
    const [openOption, setOpenOption] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        room: 1,
        children: 0
    })

    const handleOptiom = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        })
    }

    const navigate = useNavigate()

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } });
    };

    //conextapi
    const { user } = useContext(AuthContext)

    return (
        <div className={type === "list" ? "header listmode" : "header"}>
            <div className="headerList">

                <div className="headerListItem" active >
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attraction</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Car Rentals</span>
                </div>
            </div>
            {type !== "list" && <div className="headerContainer">
                <div className="headerContent">
                    <div className="headerData">
                        <h1 className="headerTitle">A lifetime of discounts? It's a Genius </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels +  unlock instant savings of 10% or with a free account
                        </p>
                    </div>
                    {user ? (`Welcome ${user.username}`) : (
                        <button className=" btn btn-primary  headerBtn" onClick={() => {
                            navigate("/register")

                        }}>Sign in / Register</button>
                    )
                    }

                </div>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" className='headerSearchInput'
                            onChange={(e) => { setDestination(e.target.value) }}
                            placeholder='Where are you from ' />
                    </div>


                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerFontIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText' > {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")} `} </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            minDate={new Date()}
                            className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOption(!openOption)} className='headerSearchText' >
                            {`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                            
                        {openOption && <div className="options">
                            <div className="optionText">
                                <span className="optionText">Adult</span>
                                <button disabled={options.adult <= 1} className="optoinCounterButton" onClick={() => { handleOptiom("adult", "d") }} >-</button>
                                <span className="">{options.adult}</span>
                                <button className="optoinCounterButton" onClick={() => { handleOptiom("adult", "i") }} >+</button>
                            </div>
                            <div className="optionText">
                                <span className="optionText">children</span>
                                <button disabled={options.children <= 0} className="optoinCounterButton" onClick={() => { handleOptiom("children", "d") }} >-</button>
                                <span className="">{options.children}</span>
                                <button className="optoinCounterButton" onClick={() => { handleOptiom("children", "i") }} >+</button>
                            </div>
                            <div className="optionText">
                                <span className="optionText">Room</span>
                                <button disabled={options.room <= 1} className="optoinCounterButton" onClick={() => { handleOptiom("room", "d") }} >-</button>
                                <span className="">{options.room}</span>
                                <button className="optoinCounterButton" onClick={() => { handleOptiom("room", "i") }} >+</button>
                            </div>
                        </div>}

                    </div>
                    <div className="headerSearchItem">
                        <button className="btn btn-primary" onClick={handleSearch}>Search</button>

                    </div>
                </div>

            </div>
            }
        </div>
    )
}

export default Header
