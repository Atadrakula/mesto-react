function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards" key={card._id}>
      <button
        className="cards__trash cursor-pointer button-clickable"
        aria-label="Мусорка"
        type="button"
      ></button>
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="cards__img cursor-pointer"
        onClick={handleClick}
      ></div>
      <div className="cards__name-form">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__heart-box">
          <button
            className="cards__heart cursor-pointer"
            aria-label="Сердце"
            type="button"
          ></button>
          <p className="cards__heart-count">{card.likes?.length || 0}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
