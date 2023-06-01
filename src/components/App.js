import Footer from "./landing/Footer.js";
import Header from "./landing/Header.js";
import Main from "./landing/Main.js";
import PopupWithForm from "./landing/PopupWithForm.js";
import ImagePopup from "./landing/ImagePopup.js";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSelectedCard, setIsSelectedCard] = useState(false);

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function openAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }

  function openEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  const closeAllPopups = useCallback(() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSelectedCard(false);
  }, []);

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }

    function handleClickClose(e) {
      if (e.target.classList.contains("popup")) {
        closeAllPopups();
      }
    }

    if (
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen ||
      isSelectedCard
    ) {
      document.addEventListener("keydown", handleEscClose);
      document.addEventListener("click", handleClickClose);

      return () => {
        document.removeEventListener("keydown", handleEscClose);
        document.removeEventListener("click", handleClickClose);
      };
    }
  }, [
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isSelectedCard,
    closeAllPopups,
  ]);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={openEditProfilePopup}
          onAddPlace={openAddPlacePopup}
          onEditAvatar={openEditAvatarPopupOpen}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="popup-edit"
          title="Редактировать профиль"
          children={
            <>
              <input
                name="username"
                type="text"
                placeholder="Имя"
                className="popup__input popup__input_type_username"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_username"/>
              <input
                name="useractivity"
                type="text"
                placeholder="О себе"
                className="popup__input popup__input_type_useractivity"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_useractivity"/>
              <button
                id="button-submit-popup-edit"
                type="submit"
                className="popup__submit"
              >
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="popup-add"
          title="Новое место"
          children={
            <>
              <input
                name="name"
                type="text"
                placeholder="Название"
                className="popup__input popup__input_type_card-name"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="popup__input-text-error popup__input-text-error_type_name"></span>
              <input
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_card-link"
                required
              />
              <span className="popup__input-text-error popup__input-text-error_type_link"/>
              <button
                disabled
                id="button-submit-popup-add"
                type="submit"
                className="popup__submit popup__submit_inactive"
              >
                Создать
              </button>
            </>
          }
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="popup-edit-avatar"
          title="Обновить аватар"
          children={
            <>
              <input
                name="avatar"
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_card-link"
                required
              />
              <span class="popup__input-text-error popup__input-text-error_type_avatar"/>
              <button
                disabled
                id="button-submit-popup-avatar"
                type="submit"
                className="popup__submit popup__submit_inactive"
              >
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          name="popup-delete"
          title="Вы уверены?"
          children={
            <>
              <button type="button" class="popup__submit">
                Да
              </button>
            </>
          }
        />
        <ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
