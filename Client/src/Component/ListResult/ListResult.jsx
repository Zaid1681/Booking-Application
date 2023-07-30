import "./ListResult.css";
import React from "react";
import { Link } from "react-router-dom";

const ListResult = (item) => {
  console.log("item", item.item);
  return (
    <div className="searchItem flex lg:flex-row flex-col bg-white">
      {" "}
      <img
        // src={item.photos[0]}
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-full"
      />
      <div className="flex flex-2 md:flex-row flex-col">
        {" "}
        <div className="siDesc">
          <h1 className="siTitle">{item.item.name}</h1>
          <span className="siDistance">hello wordl from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">{item.item.desc}</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.item.rating}</button>
            </div>
          )}
          <div className="siDetailTexts ">
            <span className="siPrice">${item.item.cheapestPrices}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item.item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
