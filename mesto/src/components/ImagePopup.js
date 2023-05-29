function imagePopup() {
  return (
    <div className="popup image-popup">
      <div className="image-popup__container">
        <button
          aria-label="Закрыть"
          className="popup__close image-popup__close button-clickable cursor-pointer"
          type="button"
        ></button>
        <img src="#" alt="#" className="image-popup__img" />
        <h3 className="image-popup__title">#</h3>
      </div>
    </div>
  );
}

export default imagePopup;