import { useEffect, useRef } from "react";
const Ref = () => {
  const h1 = useRef(null);
  const str = "<script> alert('ravi')</script>";

  useEffect(() => {
    h1.current.style.color = "red";
    h1.current.click();
    console.log(h1);
    // const para= document.getElementById("para");
    // para.style.color = "red";
    // para.click();
    // const timer = setTimeout(() => {
    //   h1.current.innerHTML = `<b> this is car </b>

    //   `;
    // }, 3000);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  return (
    <div>
      <p
        id="para"
        ref={h1}
        onClick={() => console.log("This is my name : Suraj")}
      >
        This is my name : Suraj 
        <h4 dangerouslySetInnerHTML={{__html: str }} />
      </p>
    </div>
  );
};

export default Ref;
