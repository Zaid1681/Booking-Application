import React, { useContext, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Component/Navbar.jsx";
import Header from "../../Component/Header";
import Featured from "../../Component/Featured/Featured";
import PropertyList from "../../Component/PropertyList/PropertyList";
import FeatureProperty from "../../Component/FeatureProperty/FeatureProperty.jsx";
import MailList from "../../Component/mailList/MailList.jsx";
import Footer from "../../Component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Header />
      <Featured />
      <div className=" px-14 py-10  font-bold   mt-[5rem] font-titlefont text-3xl ">
        Browse hotel here{" "}
      </div>
      <PropertyList />
      <div className=" px-14 py-10  font-bold   mt-[5rem] font-titlefont text-3xl ">
        Home Guests Love
      </div>

      <FeatureProperty />
      <MailList />
      <Footer />
    </div>
  );
}

export default Home;
