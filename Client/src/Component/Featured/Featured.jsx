import React from "react";
import UseFetch from "../../Hooks/UseFetch.jsx";
import "./Featured.css";
function Featured() {
  const { data, loading, error } = UseFetch(
    "/api/hotels/countByCity?cities=mumbai,pune,delhi,london"
  );
  // console.log("features : " ,data?.list[1]);

  return (
    <div>
      {/* Featured */}
      <div className="featured ">
        {loading ? (
          console.log("loading data pls wait")
        ) : (
          <div className="flex md:mx-20 flex-col md:my-10 -z-10 lg:my-2 mb-10 mt-[20rem]  sm:mt-[9rem] ">
            <h1 className="mx-10 text-2xl font-bold py-4  font-titleFont">
              Book Hotels In :
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-10 mx-10 ">
              <div className="featureItem ">
                <img
                  src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="featuredImage  "
                  style={{ opacity: 0.9 }}
                />

                <div className="text-xl z-10 top-40">
                  <h1 className="z-10 -mt-20 text-3xl font-titlefont text-white">
                    NewYork
                  </h1>
                </div>
              </div>
              <div className="featureItem">
                <img
                  src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ opacity: 0.9 }}
                  className="featuredImage"
                />
                <div className="text-xl z-10 top-40">
                  <h1 className="z-10 -mt-20  text-3xl font-titlefont text-white">
                    {" "}
                    Singapore
                  </h1>
                </div>
              </div>
              <div className="featureItem">
                <img
                  src="https://images.pexels.com/photos/3038813/pexels-photo-3038813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ opacity: 0.9 }}
                  className="featuredImage"
                />
                <div className="text-xl z-10 top-40">
                  <h1 className="z-10 -mt-20  text-3xl font-titlefont text-white">
                    Hong Kong
                  </h1>{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;
