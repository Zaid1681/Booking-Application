// import React from 'react'
// import "./PropertyList.css"
// import UseFetch from '../../Hooks/UseFetch.jsx'

// function PropertyList() {

//   //  const func1 = async () =>{
//   const { data, loading, error } = UseFetch("/hotelsCountByCityType")
//   console.log(data);

//   //  }
//   //  func1()

//   // data.promise((value , error)=>{
//   //   if(value)
//   //   console.log(value);
//   //   else(error)
//   //   console.log(error);
//   // })
//   // console.log(data[1]);
//   // data.map((value)=>{
//   //   // console.log("hello world!!");
//   //   console.log(value);

//   // })

//   const images = [
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg" ,
//     "https://media-cdn.tripadvisor.com/media/photo-s/01/5d/28/78/montego-bay.jpg"

//   ];

//    return (
//       <div className="pList">
//         {loading ? (
//           "loading"
//         ) : (
//           <>
//             {data &&
//               images.map((img, i) => (
//                 // <div className="pListItem" key={i}>
//                 //   <img
//                 //     src={img}
//                 //     alt=""
//                 //     className="pListImg"
//                 //   />
//                 //   <div className="pListTitles">
//                 //     <h1>{data[i]?.type}</h1>
//                 //     <h2>{data[i]?.count} {data[i]?.type}</h2>
//                 //   </div>
//                 // </div>

//                 <div className="PListContainer" key={i}>
//                   <img className='pListImg' src={img} alt="" />
//                   <div className="pListTitles">
//                     <h1>{data[i]?.type}</h1>
//                     <h2>{data[i]?.count} {data[i]?.type}</h2>
//                   </div>
//                 </div>
//               ))}
//           </>
//         )}
//       </div>
//     );
// }

// export default PropertyList

// // import React from 'react'
// // import "./PropertyList.css"
// // import useFetch from '../../Hooks/UseFetch.jsx'

// // const PropertyList = () => {
// //   const { data, loading, error } = useFetch("/hotels/CountByCityType");

// //   const images = [
// //     "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
// //     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
// //     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
// //     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
// //     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
// //   ];
// //   return (
// //     <div className="pList">
// //       {/* <div className="PListContainer"> */}

// //       {loading ? (
// //         "loading"
// //       ) : (
// //         <>
// //           {data &&
// //             images.map((img, i) => (
// //               <div className="PListContainer" key={i}>
// //                 <img
// //                   src={img}
// //                   alt=""
// //                   className="PListImg"
// //                 />
// //                 <div className="PListTitle">
// //                   <h1>{data[i]?.type}</h1>
// //                   <h2>{data[i]?.count} {data[i]?.type}</h2>
// //                 </div>
// //               </div>
// //             ))}
// //         </>
// //       )}
// //       {/* </div>/ */}
// //     </div>
// //   );
// // };

// // export default PropertyList;

import useFetch from "../../Hooks/UseFetch.jsx";
import "./PropertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/CountByCityType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className=" mx-10 gap-10 grid px-4 md:px-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                {/* pListTitle must be inside the plistItem container only */}
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
