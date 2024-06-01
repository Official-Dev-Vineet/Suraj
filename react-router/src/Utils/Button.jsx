const Button = (props) => {
  return (
    <button
      className="my-2 px-2 text-light-800 bg-slate-500"
      onClick={() => props.btnClick()}
    >
      {props.name}
    </button>
  );
};

export default Button;

// Write a function calculate of two numbers
