import React from 'react'
import UseFetch from '../../Hooks/UseFetch.jsx'
import  "./Featured.css"
function Featured() {
    const {data , loading , error } = UseFetch("/countByCity?cities=mumbai,pune,delhi,london")
        // console.log("features : " ,data?.list[1]);

  return (
    <div>
        {/* Featured */}
        <div className="featured">
           {loading ? console.log("loading data pls wait") :  
           <div className="featureContainer">
                <div className="featureItem">
                    <img src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImage"  />
                    <div className="featureTitle">
                        <h1>NewYork</h1>
                       
                        <h3>1 Properties</h3>
                    </div>

                </div>
                <div className="featureItem">
                    <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImage" />
                    <div className="featureTitle">
                        <h1>Singapore</h1>
                        <h3>2Properties</h3>
                    </div>

                </div>
                <div className="featureItem">
                    <img src="https://images.pexels.com/photos/3038813/pexels-photo-3038813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImage" />
                    <div className="featureTitle">
                        <h1>Hong Kong</h1>
                        <h3> 2 Properties</h3>
                    </div>

                </div>
            </div>

           }
        </div>
        
      
    </div>
  )
}

export default Featured
