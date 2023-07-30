import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        credentials
      );
      dispatch({ type: "LOGIN_SUCESS", payload: res.data });
      toast.success("Register Sucess", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
      // navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      toast.error("Register Failed", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        // navigate("/register");
        window.location.reload(false);
      }, 1500);
    }
  };
  return (
    <div className="login   bg-slate-100 flex gap-10 justify-around  overflow-hidden ">
      <div className="w-[40%] rounded">
        <img src="./images/booking.jpg" className="rounded-xl" />
      </div>

      <div className="  ">
        {" "}
        <div className="h-full flex items-center shadow-lg rounded justify-center py-5 px-4 sm:px-6 lg:px-8">
          <div className="   w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center w-full text-3xl font-extrabold text-gray-900">
                Create your account
              </h2>
            </div>
            <form className="mt-8 space-y-8" action="#" method="POST">
              <div className="rounded-md shadow-sm gap-[10rem]">
                <div className="">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    id="email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>

                <div className="text-sm">
                  <Link to="/login">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Already have Account ?{" "}
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                  disabled={loading}
                  onClick={handleClick}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
