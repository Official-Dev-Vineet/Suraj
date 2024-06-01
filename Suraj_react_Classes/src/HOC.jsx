import PropTypes from "prop-types";

const HOC = (p) => {
  return (
    <div style={{ backgroundColor: p.color }}>
      <div className="cmp">{p.component}</div>
      <div>{p.children}</div>
    </div>
  );
};

export default HOC;

HOC.propTypes={
    color:PropTypes.string,
    component:PropTypes.node,
    children:PropTypes.node
}
