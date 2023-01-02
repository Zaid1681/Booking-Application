import React, { useContext, useEffect } from 'react'
import "./Home.css"
import Navbar from "../../Component/Navbar.jsx"
import Header from '../../Component/Header'
import Featured from '../../Component/Featured/Featured'
import PropertyList from '../../Component/PropertyList/PropertyList'
import FeatureProperty from '../../Component/FeatureProperty/FeatureProperty.jsx'
import MailList from '../../Component/mailList/MailList.jsx'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext.jsx";





function Home() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
        <Navbar />
          <Header />
          <Featured />
          <div className="hotelTitle">Browse the hotel here</div>
          <PropertyList />
          <div className="hotelTitle">Home Guests Love</div>

          <FeatureProperty />
          <MailList />
          <Footer />


     
    </div>
  )
    }

export default Home
