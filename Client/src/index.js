import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { SearchContextProvider } from "./Context/SearchContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
        <ToastContainer />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
