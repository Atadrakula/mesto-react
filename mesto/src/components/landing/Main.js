import { useEffect, useState } from "react";
import api from "../../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [isUserName, setUserName] = useState("");
  const [isUserDescription, setUserDescription] = useState("");
  const [UserAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([""]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const [dataProfile, dataCards] = await Promise.all([
          api.pullProfileInfo(),
          api.pullCardInfo(),
        ]);
        setUserName(dataProfile.name);
        setUserDescription(dataProfile.about);
        setUserAvatar(dataProfile.avatar);
        setCards(dataCards);
      } catch (error) {
        console.error(`Ошибка при загрузке данных пользователя: ${error}`);
      }
    };

    getUserInfo();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container cursor-pointer">
            <div
              style={{ backgroundImage: `url(${UserAvatar})` }}
              className="profile__avatar"
            ></div>
            <div
              className="profile__avatar-overlay"
              onClick={onEditAvatar}
            ></div>
          </div>
          <div className="profile__data">
            <h1 className="profile__name">{isUserName}</h1>
            <button
              className="profile__button-edit button-clickable cursor-pointer"
              aria-label="Редактировать"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__activity">{isUserDescription}</p>
          </div>
        </div>
        <button
          className="profile__button-add button-clickable cursor-pointer"
          aria-label="Добавить"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="places__cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
