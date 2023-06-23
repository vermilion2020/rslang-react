import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

interface ModalProps {
  children: React.ReactNode,
  onClose: () => void
}

export function Modal({children, onClose}: ModalProps) {
  const { close } = useContext(ModalContext);

  return (
    <>
      <div
        className="shadow-overlay" id="overlay" onClick={onClose}
      />
      <div className="popup-container" id="popup">
        <form id="auth-form" className="popup">
          <button className="popup__cross-button" onClick={close}>X</button>
          <p>Приложение для изучения английского языка с помощью игр.</p>
          <span className="popup__subheading">Регистрация</span>
          { children }
          <span className="popup__copyright">© Все права защищены — 2023 г. RS Lang</span>
          </form>
      </div>
    </>   
  );
}