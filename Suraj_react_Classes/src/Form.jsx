import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiData,setApiData] = useState(null)
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // const formData= new FormData(e.target);
    // const name= formData.get("name")
    // console.log(name)
    // const email= formData.get("email")
    // console.log(email)
    // const password= formData.get("password")
    // console.log(password)
    // if (name.length > 3 && name > 12) {
    //   alert("Form Submitted");
    // }
    //  check regex for name validation
    password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ? ""
      : setError("password must be strong");

    // check regex for email validation
    email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ? ""
      : setError("email must be valid");

    // error.length > 0
    //   ? alert(error)
    //   :

    fetch("https://www.google.com", {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      body: {
        n: name,
        e: email,
        p: password,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        result.code === 200 && setApiData(result.data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log("task completed");
      });
  };
  return (
    <section>
      <h2>Form Handling</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "auto",
          gap: "1rem",
          backgroundColor: "springgreen",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {/* <button type="submit">Submit</button> */}
        <input type="submit" value="Submit" disabled={loading} />
      </form>
      {error.length > 0 && <p> {error}</p>}
      {loading && <Loader type={props.formType} />}
    </section>
  );
};

export default Form;

function Loader(props) {
  const type= props.type
  return <div className="Loader">{type}</div>;
}