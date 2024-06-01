import { useContext } from "react";
import "./styles/about.css";
import { useSearchParams } from "react-router-dom";
import { GlobalData } from "../Helper/GlobalData";
const About = () => {
  const { setName } = useContext(GlobalData);
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
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get("search");
  return (
    <div className="about">
      <input
        type="text"
        placeholder="change global state"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>about page</h1>
      <input
        type="text"
        onChange={(e) =>
          setSearchParam((pre) => {
            return { ...pre, search: e.target.value };
          })
        }
      />
      {UserData.filter(
        (data) => data.id.toString() === search || data.name === search
      ).map((data) => (
        <div>
          <p>Name: {data.name}</p>
          <p>Designation: {data.des}</p>
        </div>
      ))}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae tempore
        reprehenderit corporis! Neque aliquid praesentium corporis itaque quis
        dolores veniam sit? Doloribus deleniti cumque maxime consequatur
        voluptate recusandae dolore esse facere sapiente. Officiis distinctio
        autem voluptatibus ullam, nemo quia, eum nisi expedita facilis magnam
        debitis culpa velit! Iure aliquam alias reiciendis earum in rerum quidem
        aliquid libero vitae dolorum quos reprehenderit suscipit odio placeat
        provident facere magnam soluta nostrum dolorem, veritatis ullam dolore
        eligendi sint. Alias amet laborum repellat perferendis voluptates iusto
        blanditiis commodi eos. Nihil quidem voluptatibus doloribus,
        necessitatibus quis molestiae aliquam rem exercitationem accusamus sit.
        Ipsam minus commodi repudiandae in dignissimos dolore quis rerum, fugit
        voluptates id exercitationem maiores, illo porro vitae facilis voluptate
        molestias perspiciatis eos doloribus excepturi? Illo voluptatibus ipsa
        numquam quaerat, architecto non eius obcaecati incidunt, cumque fuga
        quas illum reprehenderit facilis sunt quisquam esse voluptatem
        exercitationem explicabo? Praesentium, sit? In distinctio neque
        consequuntur a, ducimus suscipit provident esse assumenda ut! Tempore
        tempora quo illo neque facere nisi delectus quis minus repellat ea atque
        dolores voluptates qui accusantium quasi blanditiis, totam earum
        repudiandae dicta cum fugit animi? Perferendis, cum iusto. Quam, nostrum
        at saepe corrupti dolor, sit mollitia, molestias inventore officiis
        facilis est quisquam enim!
      </p>
    </div>
  );
};

export default About;
