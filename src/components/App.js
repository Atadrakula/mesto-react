import Footer from "./landing/Footer.js";
import Header from "./landing/Header.js";
import Main from "./landing/Main.js";
import PopupWithForm from "./landing/PopupWithForm.js";
import ImagePopup from "./landing/ImagePopup.js";
import React, { useState, useEffect, useCallback } from "react";
import api from "../utils/Api.js";
import {
  CurrentUserContext
} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./landing/EditProfilePopup.js";
import EditAvatarPopup from './landing/EditAvatarPopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSelectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const dataUser = await api.pullProfileInfo();
        setCurrentUser(dataUser);
      } catch (error) {
        console.error(`Ошибка при загрузке данных пользователя: ${error}`);
      }

    }
    fetchUserInfo();
  }, []);

  async function handleCardLike(targetCard) {

    const isLiked = targetCard.likes.some(i => i._id === currentUser._id);

    try {
      const checkedCard = await api.toggleLikeCard(targetCard._id, !isLiked);
      const newCards = cards.map(card => card._id === checkedCard._id ? checkedCard : card);
      setCards(newCards);
    } catch (error) {
      console.error("Ошибка при лайке/дизлайке карточки:", error);
    }
  }

  async function handleCardDelete(targetCard) {
    try {
      await api.deleteCard(targetCard._id);
      const newCards = cards.filter(card => card._id !== targetCard._id);
      setCards(newCards);
    } catch (error) {
      console.error("Ошибка при удалении карточки:", error);
    }
  }

  async function handleUpdateUser(dataUser) {
    try {
      const updateData = await api.patchProfileInfo(dataUser);
      setCurrentUser(updateData);
      closeAllPopups();
    } catch (error) {
      console.error("Ошибка при обновлении данных пользователя:", error);
    }
  }

  async function handleUpdateAvatar(avatarLink) {
    try {
      const updateAvatar = await api.pushAvatar(avatarLink);
      setCurrentUser(updateAvatar);
      closeAllPopups();
    } catch (error) {
      console.error("Ошибка при обновлении данных пользователя:", error);
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
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
    setSelectedCard(null);
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={openEditProfilePopup}
            onAddPlace={openAddPlacePopup}
            onEditAvatar={openEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            setCards={setCards}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
                  minLength="2"
                  maxLength="30"
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
                <span className="popup__input-text-error popup__input-text-error_type_link" />
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
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <PopupWithForm
            name="popup-delete"
            title="Вы уверены?"
            children={
              <>
                <button type="button" className="popup__submit">
                  Да
                </button>
              </>
            }
          />
          <ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
