import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Reserve.css";
import useFetch from "../../Hooks/UseFetch.jsx";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Context/SearchContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectRooms, setSelectRooms] = useState([]);
  const { data, loading, error } = useFetch(`api/hotels/hotelrooms/${hotelId}`);
  const { dates } = useContext(SearchContext);
  console.log(hotelId);
  console.log("data --> from reserve: ", data);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  console.log("Dates", alldates);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDate.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handlSelect = (e) => {
    e.preventDefault();
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectRooms(
      checked
        ? [...selectRooms, value]
        : selectRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();
  // handle click
  const handleClick = async () => {
    try {
      await Promise.all(
        selectRooms.map((roomId) => {
          // console.log("looginh room", roomId);
          const res = axios.put(
            `http://localhost:8000/api/rooms/availability/${roomId}`,
            {
              dates: alldates,
            }
          );
          toast.success("Room Booked", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log("getting room details", res.data);

          return res.data;
        })
      );
      setOpen(false);
      // navigate("/");
    } catch (err) {
      console.log("error here", err);
    }
  };

  console.log("select rooms: ", selectRooms);

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        ></FontAwesomeIcon>
        <span>Select Your rooms:</span>
        {data ? (
          data.map((item) => (
            // console.log(item)
            <div className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">{item?.title}</div>
                <div className="rDesc">{item?.desc}</div>
                <div className="rMax">
                  Max People: <b> {item?.maxPeople} </b>
                </div>
                {/* <div className="rPrice">{item?.price}</div> */}
              </div>

              {item?.roomNumber.map((itemRoom) => (
                <div className="room">
                  <label> {itemRoom?.number}</label>
                  <input
                    type="checkbox"
                    value={itemRoom?._id}
                    onChange={handlSelect}
                    disabled={!isAvailable(itemRoom)}
                  />
                </div>
              ))}
            </div>
          ))
        ) : (
          <>
            <h1>hello</h1>
          </>
        )}

        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
    // <>hello </>
  );
};

export default Reserve;
