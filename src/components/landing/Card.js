function Card({ card, onCardClick, key }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards" key={key}>
      <button
        className="cards__trash cursor-pointer button-clickable"
        aria-label="Мусорка"
        type="button"
      />
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="cards__img cursor-pointer"
        onClick={handleClick}
      />
      <div className="cards__name-form">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__heart-box">
          <button
            className="cards__heart cursor-pointer"
            aria-label="Сердце"
            type="button"
          />
          <p className="cards__heart-count">{card.likes?.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
