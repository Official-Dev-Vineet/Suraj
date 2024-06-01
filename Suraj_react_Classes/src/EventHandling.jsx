import { useState } from "react";
import "./eventStyle.css";
const EventHandling = () => {
  const [name, setName] = useState("Suraj");
  //   let name = "suraj";
  const ChangeName = () => {
    // name = "vineet";
    setName("vineet");
    console.log(name);
  };
  const getText = (e) => {
    console.log(e);
    if (e.ctrlKey === true) {
      e.target.style.background = "pink";
      e.target.textContent = name;
      const currentValue = e.target.textContent;
      setName(currentValue);
    }
  };
  const ChangeNameByUsingInput = (e) => {
    setName(e.target.value);
  };
  return (
    <section className="eventHandle">
      {
        <h2 className={name == "vineet" ? "vineet" : ""}>
          Event Handling : {name}{" "}
        </h2>
      }
      <div
        style={{ height: "300px", width: "300px", background: name }}
        onClick={(e) => getText(e)}
        onMouseOver={() => ChangeName()}
      >
        This is my div
      </div>
      <input type="text" onChange={ChangeNameByUsingInput} />
    </section>
  );
};

export default EventHandling;
