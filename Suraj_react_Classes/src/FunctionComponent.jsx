import { useState, useEffect } from "react";
const FullLifecycleExample = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [allValue, setAllValue] = useState([]);
  // componentDidMount
  useEffect(() => {
    //   updateArrayWithCountValue();
    const title = document.title;
    document.title = "functional component";
    // componentWillUnmount
    return () => {
      document.title = title;
      alert("component will unmount");
    };
},[]);
// useEffect(()=>{

//     return ()=>{
//         alert("component will unmount")
//     }
// },[])
//   componentDidUpdate
  useEffect(() => {
    if (count > 5) {
      console.log("componentDidUpdate: Component has been updated");
      console.log("updateArrayWithCountValue", allValue);
      setData("Suraj")
    }
  }, [count]);
  const updateArrayWithCountValue = () => {
    setAllValue((pre) => [...pre, count]);
  };
  return (
    <div>
      <h1>Full Lifecycle Example</h1>
      <p>Data: {data}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      {allValue.length > 0 && <p>All Value: {allValue.join(",")}</p>}
    </div>
  );
};
export default FullLifecycleExample;
