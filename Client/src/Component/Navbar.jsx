import React, { useContext, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from '../Context/AuthContext'

function Navbar() {

  const { user } = useContext(AuthContext)

  const handleLogout =()=>{
    localStorage.removeItem("user");
    window.location.reload(false);
    console.log("logout");
  }


  // useEffect(()=>{
  //   handleLogout()

  // },[])
  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to="/">
          <span className="logo" style={{ "color": "white" }}>Lambooking</span>

        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/login">
              <button className="btn btn-primary navbutton">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary navbutton">Register</button>
            </Link>
          </div>
        )
        }


      </div>
        <div>

          {user && (
            <div className="navItems">
              <Link to="/">
                <button style={{margin:"10px"}} className="btn btn-primary navbutton" onClick={handleLogout}>logout</button>
              </Link>

            </div>
          ) 
        }
        </div>

    </div>
  )
}

export default Navbar
