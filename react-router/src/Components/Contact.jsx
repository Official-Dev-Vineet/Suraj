import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalData } from "../Helper/GlobalData";
import Button from "../Utils/Button";

const Contact = () => {
  const { printName } = useContext(GlobalData);
  const name2 = printName("suraj");
  const location = useLocation();
  const path = location.pathname.split("/");
  const name = path[2];
  return (
    <div>
      {name === "contact" ? "hello contact" : "hello not contact"}
      <h1>{name2}</h1>
      <Button name="Click" btnClick={() => alert("click")} />
      <Button name="Press" btnClick={() => alert("press")} />
      <Button name="Hold" btnClick={() => alert("hold")} />
      <Button name="DoubleClick" btnClick={() => alert("double click")} />
      <Button name="Drag" btnClick={() => alert("drag")} />
    </div>
  );
};

export default Contact;
