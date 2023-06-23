import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function Registration() {
  const { setModalAuth, setModalReg } = useContext(ModalContext);
  const handleRegBtnClick = () => {
    setModalReg(false);
    setModalAuth(true);
  }
  
  return (
    <form id="auth-form" className="popup">
    <h2 className="popup__heading">RS Lang</h2>
    <button className="popup__cross-button" onClick={() => {setModalReg(false)}}>X</button>
    <p>Приложение для изучения английского языка с помощью игр.</p>
    <span className="popup__subheading">Регистрация</span>
    <input className="popup__input" required type="email" name="email" placeholder="Email"/>
    <input className="popup__input" required type="text" name="name" placeholder="Имя" />
    <input className="popup__input" required type="password" name="password" placeholder="Пароль" />
    <input className="popup__input" required type="password" name="password-confirm" placeholder="Повторно пароль" />
    <div className="popup__buttons-auth">
      <button type="submit" id="back-button" className="button button_light" onClick={handleRegBtnClick}>Вернуться</button>
      <button type="submit" id="registration" className="popup__submit button">Зарегистрироваться</button>
    </div>
    <span className="popup__copyright">© Все права защищены — 2022 г. RS Lang</span>
  </form>
  );
}