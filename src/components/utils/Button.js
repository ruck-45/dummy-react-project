import "./Button.css";

const Button = (props) => {
  let className = "Button " + props.className;
  return (
    <button onClick={() => props.clickFunction()} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
