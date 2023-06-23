import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function Auth() {
  const { setModalReg, setModalAuth } = useContext(ModalContext);
  const handleAuthBtnClick = () => {
    setModalReg(true);
    setModalAuth(false);
  }

  return (
    <form id="auth-form" className="popup">
    <h2 className="popup__heading">RS Lang</h2>
    <button className="popup__cross-button" onClick={() => {setModalAuth(false)}}>X</button>
    <p>Приложение для изучения английского языка с помощью игр.</p>
    <span className="popup__subheading">Вход</span>
    <input className="popup__input" required name="email" type="email" placeholder="Электронная почта" />
    <input className="popup__input" required name="password" type="password" placeholder="Пароль" />
    <div className="popup__buttons">
      <button type="submit" id="auth-button" className="button">Вход</button>
      <button id="reg-button" className="button button_light" onClick={handleAuthBtnClick}>Регистрация</button>
    </div>
    <span className="popup__copyright">© Все права защищены — 2022 г. RS Lang</span>
    </form>
  );
}