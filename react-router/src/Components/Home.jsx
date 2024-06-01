// import React, { useState } from 'react'
import "./styles/home.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalData } from "../Helper/GlobalData";
import Button from "../Utils/Button";

const Home = () => {
  const { name, setIsLoggedIn, isLoggedIn } = useContext(GlobalData);

  const navigate = useNavigate();
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigate("/api/suraj");
    // }, 5000);
    // console.log("pre", timer);
    // return () => {
    //   clearTimeout(timer);
    //   console.log("after", timer);
    // };
  }, []);
  return (
    <div className="home">
      <button
        onClick={() => setIsLoggedIn(true)}
        className="my-2 text-cyan-800"
      >
        Login
      </button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      {/* {isLoggedIn ? "logged in" : "logged out"} */}
      {isLoggedIn && "successfully login"}
      <br />
      {isLoggedIn === false && " logout successfully"}
      <br />
      {isLoggedIn ? "Hello User" : "Hello Guest"} <br />
      {isLoggedIn && name === "suraj" ? "Hello suraj" : "Hello not suraj"}
      <Button />
    </div>
  );
};

export default Home;
