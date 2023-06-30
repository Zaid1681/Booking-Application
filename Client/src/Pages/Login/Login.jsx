import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //credentials
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    //mapping a value of input using thier id name
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://bookingappbackend.onrender.com/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }

    //handleClick
  };

  return (
    <div className="login   bg-slate-100 ">
      <div className="">
        {" "}
        <div className="lContainer">
          <h1 className="loginTitle">Login </h1>
          <form action="" className="loginContainer">
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput p-3  rounded"
              required
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput p-3  rounded"
              required
            />
            <button
              disabled={loading}
              onClick={handleClick}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
          <div className="loginpageLink">
            <button
              className="btn btn-link"
              onClick={() => {
                navigate("/");
              }}
            >
              back to home page
            </button>

            <button
              className="btn btn-link"
              onClick={() => {
                navigate("/register");
              }}
            >
              register
            </button>
          </div>
          <link rel="stylesheet" href="" value="back to home page" />
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
