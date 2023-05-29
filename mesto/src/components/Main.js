import {
	editAvatarPopup,
	editProfilePopup,
	addPlacePopup
} from '../utils/constants.js'

function Main() {

	// const [isOpened, setIsOpened] = React.useState(false);
	
	// function handleEditAvatarCLick() {
	// 	editAvatarPopup.classList.add('popup_visible');
	// }

	function handleEditProfileClick() {
		editProfilePopup.classList.add('popup_visible');
	}

	function handleAddPlaceClick() {
		addPlacePopup.classList.add('popup_visible');
	}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container cursor-pointer">
            <img
              src="<%=require('./images/avatar.png')%>"
              alt="Аватар"
              className="profile__avatar"
            />					
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__data">
            <h1 className="profile__name">#</h1>
            <button
              className="profile__button-edit button-clickable cursor-pointer"
              aria-label="Редактировать"
              type="button"
							onClick={handleEditProfileClick}
            ></button>
            <p className="profile__activity"></p>
          </div>
        </div>
        <button
          className="profile__button-add button-clickable cursor-pointer"
          aria-label="Добавить"
          type="button"
					onClick={handleAddPlaceClick}
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
