import GrandChild from "./GrandChild";
const ChildComp = (props) => {
  return (
    <div>
      <h1>this is child component</h1>
      {
        props.name
      }
      <GrandChild car={props.name} />
      <GrandChild car={props.name} />
      <GrandChild car={props.name} />
      <GrandChild car={props.name} />
      <GrandChild car={props.name} />
    </div>
  );
};

export default ChildComp;
