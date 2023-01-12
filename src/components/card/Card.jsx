import "./styles.scss";

export default function Card({food}) {
  return (
      <div className="card">
        <img
          src={food.imgURL}
          alt={food.food}
          className="imgURL"
        />
        <div className="overlay">
          <div className="text">
            <h2>{food.food}</h2>
            <p>Quantity: {food.quantity}</p>
          </div>
        </div>
      </div>
  );
}

