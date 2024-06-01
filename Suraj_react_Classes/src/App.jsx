// const App = () => {
//   return (
//     <div>
//       <h1>this is react app</h1>
//       <p>this isp paragraph </p>
//     </div>
//   );
// };
// import PropTypes from "prop-types";
// import ChildComp from "./ChildComp";
// import State from "./State";
// import EventHandling from "./EventHandling";
// import LifecycleExample from "./ClassCompnonent";
// import { useState } from "react";
import FullLifecycleExample from "./FunctionComponent";
// import Form from "./Form";

import HOC from "./HOC";
import Ref from "./Ref";

// import List from "./List";
function App() {
  // const myName= "Suraj";
  // const [component, setComponent] = useState(false);
  const cmp = [
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 999097)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xabcdef)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
    {
      component: <FullLifecycleExample />,
      color: `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`,
    },
  ];
  return (
    <div>
      {/* <h1>this is react app</h1> 
      <p>this is paragraph</p>
      <ChildComp name={myName} /> */}
      {/* <h3>State intro</h3> */}
      {/* <State /> */}
      {/* <EventHandling /> */}
      {/* <List /> */}
      {/* <Form formType="post" /> */}
      {/* <LifecycleExample /> */}
      {/* <button onClick={() => setComponent(true)}>Show component</button>
      <button onClick={() => setComponent(false)}>Hide component</button>
      {component === true && <FullLifecycleExample />} */}
      {/* {cmp.map((item, index) => {
        return (
          <HOC color={item.color} component={item.component} key={index}>
            My name is suraj
            <h3> this is new children </h3>
            <img
              src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSC-tzajqpca4dchoeTCp8ChzFqdXnSnKtpkbx_5arltgIZQDdV4ALDa2ojaIHmI0GE"
              height="300"
            />
          </HOC>
        );
      })} */}
      <Ref />
    </div>
  );
}

// export default App;

// function MyApp({ children }) {
//   return (
//     <div>
//       <h2> this is new react app </h2>
//       {children}
//     </div>
//   );
// }

export { App };
