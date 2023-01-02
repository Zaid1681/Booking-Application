import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import {  useContext } from "react"
import { AuthContext } from "../../Context/AuthContext.jsx"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Register() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })
    const { loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e)=>{
        e.preventDefault();
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));


    }
const navigate  = useNavigate()
    const handleClick = async(e)=>{
        e.preventDefault()

        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8000/api/auth/register", credentials);
            dispatch({type: "LOGIN_SUCESS" , payload : res.data});
            navigate("/")
            
        } catch (error) {
            dispatch({type :"LOGIN_FAILURE" , payload : error.response.data})
            
        }
    }
    return (
        <div className='login'>
            <div className="lContainer">
            <h1 className="loginTitle">Register </h1>

                <form action="" className="loginContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
                <button disabled={loading} onClick={handleClick} className="btn btn-primary">
                    Regiser
                </button>
                </form>
                <div className="loginpageLink">
                    
                    <button className="btn btn-link" onClick={()=>{
                        navigate("/")
                    }}>back to home page</button>

                    
                <button className="btn btn-link"  onClick={()=>{
                    navigate("/login")
                }} >Already a user?</button>
                </div>
            </div>

        </div>
    )
}

export default Register
