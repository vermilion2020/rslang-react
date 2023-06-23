import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function Auth() {
  const { setModalReg, setModalAuth } = useContext(ModalContext);
  const handleAuthBtnClick = () => {
    setModalReg(true);
    setModalAuth(false);
  }
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('ok');
  }

  return (
    <>
      <input className="popup__input" required name="email" type="email" placeholder="Электронная почта" />
      <input className="popup__input" required name="password" type="password" minLength={8} placeholder="Пароль" />
      <div className="popup__buttons">
        <button type="submit" id="auth-button" className="button" onClick={(e) => {submitHandler(e)}}>Вход</button>
        <button id="reg-button" className="button button_light" onClick={handleAuthBtnClick}>Регистрация</button>
      </div>
    </>
  );
}