import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';


function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
				<Footer />        
        <div className="popup edit-popup" id="popup-edit">
          <div className="popup__container">
            <button
              aria-label="Закрыть"
              className="popup__close popup__close_type_basic button-clickable cursor-pointer"
              type="button"
              id="popup-edit-close"
            ></button>
            <h2 className="popup__name">Редактировать профиль</h2>
            <form
              name="profile-form"
              action="#"
              className="popup__form"
              id="popup-edit-form"
            >
              <input
                name="username"
                type="text"
                placeholder="Имя"
                className="popup__input popup__input_type_username"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_username"></span>
              <input
                name="useractivity"
                type="text"
                placeholder="О себе"
                className="popup__input popup__input_type_useractivity"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_useractivity"></span>
              <button
                id="button-submit-popup-edit"
                type="submit"
                className="popup__submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup add-popup" id="popup-add">
          <div className="popup__container">
            <button
              aria-label="Закрыть"
              className="popup__close popup__close_type_basic button-clickable cursor-pointer"
              type="button"
              id="popup-add-close"
            ></button>
            <h2 className="popup__name">Новое место</h2>
            <form
              name="card-form"
              action="#"
              className="popup__form"
              id="popup-add-form"
            >
              <input
                name="name"
                type="text"
                placeholder="Название"
                className="popup__input popup__input_type_card-name"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_name"></span>
              <input
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_card-link"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_link"></span>
              <button
                disabled
                id="button-submit-popup-add"
                type="submit"
                className="popup__submit popup__submit_inactive"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup image-popup">
          <div className="image-popup__container">
            <button
              aria-label="Закрыть"
              className="popup__close image-popup__close button-clickable cursor-pointer"
              type="button"
            ></button>
            <img src="#" alt="#" className="image-popup__img" />
            <h3 className="image-popup__title"></h3>
          </div>
        </div>
        <div className="popup" id="popup-delete">
          <div className="popup__container">
            <button
              aria-label="Закрыть"
              className="popup__close popup__close_type_trash button-clickable cursor-pointer"
              type="button"
              id="popup-delete-close"
            ></button>
            <h2 className="popup__name popup__name-trash">Вы уверены?</h2>
            <button type="button" className="popup__submit">
              Да
            </button>
          </div>
        </div>
        <div className="popup" id="popup-edit-avatar">
          <div className="popup__container">
            <button
              aria-label="Закрыть"
              className="popup__close popup__close_type_avatar button-clickable cursor-pointer"
              type="button"
              id="popup-avatar-close"
            ></button>
            <h2 className="popup__name">Обновить аватар</h2>
            <form
              name="avatar-form"
              action="#"
              className="popup__form"
              id="avatar-form"
            >
              <input
                name="avatar"
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_card-link"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_avatar"></span>
              <button
                disabled
                id="button-submit-popup-avatar"
                type="submit"
                className="popup__submit popup__submit_inactive"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
