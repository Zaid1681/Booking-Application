import React from "react";
import "./FeatureProperty.css";
import useFetch from "../../Hooks/UseFetch.jsx";

function FeatureProperty() {
  const { data, loading, error } = useFetch(
    "/api/hotels/find/?featured=true&limit=4"
  );
  let arr = data.hotels;

  const hotel = [
    "https://images.pexels.com/photos/3773579/pexels-photo-3773579.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://thumbs.dreamstime.com/b/hotel-bed-room-21064950.jpg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
    "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  // console.log(data);

  return (
    <div className="grid    lg:grid-cols-4  md:grid-cols-3 sm:gid-cols-2 grid-cols-1 lg:px-[10rem] px-5 gap-10">
      {loading ? (
        "Loading"
      ) : (
        <>
          {arr?.map((item, index) => (
            <div className="fpItem" key={item._id}>
              <img src={`${hotel[index]}`} alt="" className="fpImg" />

              <div className="hotelsData">
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrices}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeatureProperty;
