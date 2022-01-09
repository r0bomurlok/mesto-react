import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <h3 className="popup__title">{props.title}</h3>
            <form className=" popup__form" name={props.name}>
                {props.children}
            </form>
            </div>
        </div>
    )
}

export default PopupWithForm;