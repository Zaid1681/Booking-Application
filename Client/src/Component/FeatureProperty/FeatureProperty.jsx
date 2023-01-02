import React from 'react'
import "./FeatureProperty.css"
import useFetch from '../../Hooks/UseFetch.jsx';

function FeatureProperty() {

 

const { data, loading, error } = useFetch("/find/?featured=true&limit=4");
let arr = data.hotels
// console.log(data);


return (
  <div className="fp">
    {loading ? (
      "Loading"
    ) : (
      <>
        {arr?.map((item) => (
          <div className="fpItem" key={item._id}>
                      <img src="https://thumbs.dreamstime.com/b/hotel-bed-room-21064950.jpg" alt="" className="fpImg" />

           <div className="hotelsData">
           <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrices}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
           </div>
          </div>
        ))}
      </>
    )}
  </div>
);

}

export default FeatureProperty
