import "./hotel.css";
import Navbar from "../../Component/Navbar.jsx";
import Header from "../../Component/Header.jsx";
import MailList from "../../Component/mailList/MailList";
import Footer from "../../Component/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseFetch from "../../Hooks/UseFetch.jsx";
import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Reserve from "../../Component/reserve/Reserve.jsx";
import { AuthContext } from "../../Context/AuthContext";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const location = useLocation();
  // console.log("location : ",location);
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = UseFetch(`/api/hotels/find/${id}`);
  // console.log(data);

  const { dates, options } = useContext(SearchContext);
  console.log("options: ", options.room);
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleClick = () => {
    // console.log("hello Hotel click");
    if (user) {
      setOpenModal(true);
      console.log("hello user you are login");
    } else {
      navigate("/login");
    }
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          {/* <button className="bookNow">Reserve or Book Now!</button> */}
          <h1 className="hotelTitle">{data?.hotel?.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St {data?.hotel?.distance} New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data?.hotel?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data?.hotel?.cheapestPrices} at this property and
            get a free airport taxi
          </span>
          <div className="hotelImages">
            {/* here images are note availbale */}
            {/* {data?.hotel?.photos?.map((photo) => ( */}
            {photos?.map((photo) => (
              <div className="hotelImgWrapper" key={data._id}>
                <img src={photo.src} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data?.hotel?.title}</h1>
              <p className="hotelDesc">{data?.hotel?.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data?.hotel?.cheapestPrices * options?.room}</b> (
                {days} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
