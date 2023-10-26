import "./Card.css";

const Card = (props) => {
  const className = "Card " + props.className;

  return (
    <div className={className} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
