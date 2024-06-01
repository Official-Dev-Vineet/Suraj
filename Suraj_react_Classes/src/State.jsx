import { useState } from "react";
import GrandChild from "./GrandChild";
const State = () => {
  //   let count = 0;

  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState("suraj");

  function increase() {
    // count++;
    // setCount((pre) => pre + 1);
    setCount(count + 1);
    console.log("value is :", count);
  }
  function decrease() {
    // count--;
    setCount((pre) => pre - 1);
    console.log("value is :", count);
  }
  return (
    <div>
      <h2>State data change count value on button click : {count} </h2>
      <button onClick={() => increase()}>++</button>
      <button onClick={() => decrease()}>--</button>
      <input type="text" onChange={(e) => setMyName(e.target.value)} />
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <GrandChild name={myName} />
    </div>
  );
};

export default State;
