import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalData } from "../Helper/GlobalData";

const Api = () => {
  const { isLoggedIn } = useContext(GlobalData);
  const { id } = useParams();
  const navigate = useNavigate();
  const UserData = [
    { id: 1, name: "suraj", des: "Full Stack Developer 332" },
    { id: 2, name: "ravi", des: "front Stack Developer 98" },
    { id: 3, name: "rohit", des: "Full Stack Developer 9989" },
    { id: 1, name: "suraj", des: "front Stack Developer 332" },
    { id: 2, name: "ravi", des: "Full Stack Developer 898" },
    { id: 3, name: "rohit", des: "Full Stack Developer 988989" },
    { id: 1, name: "suraj", des: "front Stack Developer 332" },
    { id: 2, name: "ravi", des: "Full Stack Developer 898" },
    { id: 3, name: "rohit", des: "front Stack Developer 989" },
    { id: 1, name: "suraj", des: "Full Stack Developer 332" },
    { id: 2, name: "ravi", des: "Full Stack Developer 88998" },
    { id: 3, name: "rohit", des: "front Stack Developer 9989" },
  ];
  useEffect(() => {
    if (isLoggedIn) {
      alert("You are already logged in");
    } else {
      navigate("/login", { replace: true });
    }

    fetch("apiURl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  }, []);
  return (
    <div>
      <h1>Api Data</h1>
      <Link to="/api/1"> Get Data 1</Link>
      <Link to="/api/2"> Get Data 2</Link>
      <Link to="3"> Get Data 3</Link>
      <Link to="/api/suraj"> Get Suraj</Link>
      <Link to="/api/ravi"> Get Ravi</Link>
      <Link to="rohit"> Get Data Rohit</Link>
      {UserData.filter(
        (data) => data.id.toString() === id || data.name === id
      ).map((data) => (
        <div className="pad2 bg-blue-800 border-black">
          <p>Name: {data.name}</p>
          <p>Designation: {data.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
