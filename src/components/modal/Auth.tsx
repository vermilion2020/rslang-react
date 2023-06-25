import { ChangeEvent, useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useAuth } from "../../hooks/auth";
import { EMAIL_REGEXP, MIN_PASSWORD_LENGTH } from "../../config-data";
import { ErrorMessage } from "../ErrorMessage";

export function Auth() {
  const { setModalReg, setModalAuth, setError, error } = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userAuth } = useAuth();
  
  const handleAuthBtnClick = () => {
    setModalReg(true);
    setError('');
    setModalAuth(false);
  }

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError('Legth of password confirmation should be more than 7 letters!');
      return;
    }
    if (!EMAIL_REGEXP.test(email)) {
      setError('Email is not correct!');
    }
    await userAuth(email, password);
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setError('');
    switch(field) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
    }
  }

  return (
    <>
      <input
        className="popup__input"
        type="email"
        placeholder="Электронная почта"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'email')}
      />
      <input
        className="popup__input"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'password')}
      />
      { error && <ErrorMessage error={error} /> }
      <div className="popup__buttons">
        <button
          type="submit"
          id="auth-button"
          className="button"
          onClick={(e) => {submitHandler(e)}}
        >Вход</button>
        <button
          id="reg-button"
          className="button button_light"
          onClick={handleAuthBtnClick}
        >Регистрация</button>
      </div>
    </>
  );
}