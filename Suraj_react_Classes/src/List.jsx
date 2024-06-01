import userImg1 from "./assets/userImage.jpeg";
const List = () => {
  const user = [
    {
      name: "Suraj",
      age: 29,
      state: "Gujrat",
      image: userImg1,
    },
    {
      name: "Suraj",
      age: 29,
      state: "Gujrat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr85TAOuc4IEILrax3Sh50oli5X6-KcfgBLgbF6FUIhg&s",
    },
    {
      name: "Suraj",
      age: 29,
      state: "Gujrat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr85TAOuc4IEILrax3Sh50oli5X6-KcfgBLgbF6FUIhg&s",
    },
    {
      name: "Suraj",
      age: 29,
      state: "Gujrat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr85TAOuc4IEILrax3Sh50oli5X6-KcfgBLgbF6FUIhg&s",
    },
    {
      name: "Suraj",
      age: 29,
      state: "Gujrat",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr85TAOuc4IEILrax3Sh50oli5X6-KcfgBLgbF6FUIhg&s",
    },
  ];
  return (
    <section className="ListRendering">
      <h1>List rendering</h1>
            <p>
                First User Data
            </p>
            <img src={user[0].image} alt={user[0].image} />
      <div className="listArea" style={{display:"none"}}>
        {user.map((element, index) => {
          return (
            <div key={index}>
              <div className="name">{element.name}</div>
              <div className="age">{element.age}</div>
              <div className="image">
                <img src={element.image} alt={element.name} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
