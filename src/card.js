const Card = ({ name, description, clickEvent, buttonValue }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <button onClick={clickEvent}> {buttonValue} </button>
      <p>{description}</p>
    </div>
  );
};

export default Card;
