import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function Registration() {
  const { setModalAuth, setModalReg } = useContext(ModalContext);
  const handleRegBtnClick = () => {
    setModalReg(false);
    setModalAuth(true);
  }
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('ok');
  }
  
  return (
    <>
      <input className="popup__input" required type="email" name="email" placeholder="Email"/>
      <input className="popup__input" required type="text" minLength={3} name="name" placeholder="Имя" />
      <input className="popup__input" required type="password" minLength={8} name="password" placeholder="Пароль" />
      <input className="popup__input" required type="password" minLength={8} name="password-confirm" placeholder="Повторно пароль" />
      <div className="popup__buttons-auth">
        <button type="submit" id="back-button" className="button button_light" onClick={handleRegBtnClick}>Вернуться</button>
        <button type="submit" id="registration" className="popup__submit button" onClick={(e) => {submitHandler(e)}}>Зарегистрироваться</button>
      </div>
    </>
  );
}