import "./App.css";
import "./components/stylesheets/normalize.css";
import Home from "./components/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Home />
      <ToastContainer position="bottom-left" autoClose={1500} />
    </div>
  );
}

export default App;
