import { ChangeEvent, useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useAuth } from "../../hooks/auth";
import { ErrorMessage } from "../ErrorMessage";
import { AuthContext } from "../../context/AuthContext";
import { EMAIL_REGEXP, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from "../../config-data";

export function Registration() {
  const { setModalAuth, setModalReg, error, setError } = useContext(ModalContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { userRegistration, loading } = useAuth();
  const handleRegBtnClick = () => {
    setModalReg(false);
    setModalAuth(true);
  }

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError('Legth of password confirmation should be more than 7 letters!');
      return;
    }
    if (passwordConfirmation !== password) {
      setError('Password confirmation value should be equal to password value!');
      return;
    }
    if (name.length < MIN_NAME_LENGTH) {
      setError('Legth of the name should be more than 2 letters!');
    }
    if (!EMAIL_REGEXP.test(email)) {
      setError('Email is not correct!');
    }
    await userRegistration(name, email, password);
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setError('');
    switch(field) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'passwordConfirmation':
        setPasswordConfirmation(event.target.value);
        break;
    }
  }
  
  return (
    <>
      <input 
        className="popup__input"
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'email')}
      />
      <input
        className="popup__input"
        value={name}
        type="text"
        placeholder="Имя"
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'name')}
      />
      <input
        className="popup__input"
        value={password}
        type="password"
        placeholder="Пароль"
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'password')}
      />
      <input
        className="popup__input"
        value={passwordConfirmation}
        type="password"
        placeholder="Повторно пароль"
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'passwordConfirmation')}
      />
      { error && <ErrorMessage error={error} /> }
      <div className="popup__buttons-auth">
        <button
          type="submit"
          id="back-button"
          className="button button_light"
          onClick={handleRegBtnClick}
        >Вернуться</button>
        <button
          type="submit"
          id="registration"
          className="popup__submit button"
          onClick={(e) => {submitHandler(e)}}
          disabled={loading ? true : false}
        >Зарегистрироваться</button>
      </div>
    </>
  );
}