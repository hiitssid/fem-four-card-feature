import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{borderTop:` 3px solid ${props.data.borderColor}`}}>
      <div className="card-items">
        <h3 className="card-title">{props.data.title}</h3>
        <p className="card-description">{props.data.description}</p>
        <img className="card-image" src={`../images/${props.data.icon}`} alt="" />
      </div>
    </div>
  );
};

export default Card;
