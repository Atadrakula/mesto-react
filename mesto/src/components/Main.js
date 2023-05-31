import { useEffect, useState } from "react";
import api from "../utils/Api";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  // const [isOpened, setIsOpened] = React.useState(false);
	const [isUserName, setIsUserName] = useState('');
	const [isUserDescription, setIsUserDescription] = useState('');
	const [isUserAvatar, setIsUserAvatar] = useState('');

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const dataProfile = await api.pullProfileInfo();
				setIsUserName(dataProfile.name);
				setIsUserDescription(dataProfile.about);
				setIsUserAvatar(dataProfile.avatar);
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
          <div 
						className="profile__avatar-container cursor-pointer">
            <div
							style={{ backgroundImage: `url(${isUserAvatar})` }}            
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
          <template id="cardTemplate">
            <li className="cards">
              <button
                className="cards__trash cursor-pointer button-clickable"
                aria-label="Мусорка"
                type="button"
              ></button>
              <img src="#" alt="#" className="cards__img cursor-pointer" />
              <div className="cards__name-form">
                <h2 className="cards__name">#</h2>
                <div className="cards__heart-box">
                  <button
                    className="cards__heart cursor-pointer"
                    aria-label="Сердце"
                    type="button"
                  ></button>
                  <p className="cards__heart-count"></p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;
