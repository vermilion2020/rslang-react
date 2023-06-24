import { ChangeEvent, useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useAuth } from "../../hooks/auth";
import { ErrorMessage } from "../ErrorMessage";
import { AuthContext } from "../../context/AuthContext";

export function Registration() {
  const { setModalAuth, setModalReg, close } = useContext(ModalContext);
  const { loggedIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { userRegistration, loading } = useAuth();
  const handleRegBtnClick = () => {
    setModalReg(false);
    setModalAuth(true);
  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Legth of password confirmation should be more than 7 letters!');
      return;
    }
    if (passwordConfirmation !== password) {
      setError('Password confirmation value should be equal to password value!');
      return;
    }
    if (name.length < 3) {
      setError('Legth of the name should be more than 2 letters!');
    }
    if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(email)) {
      setError('Email is not correct!');
    }
    userRegistration(name, email, password, passwordConfirmation);
    if (loggedIn) {
      close();
    }
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
        if (event.target.value.length < 8) {
          setError('Legth of the password should be more than 7 letters!');
        }
        if (event.target.value !== passwordConfirmation) {
          setError('Password confirmation value should be equal to password value!');
        }
        setPassword(event.target.value);
        break;
      case 'passwordConfirmation':
        setPasswordConfirmation(event.target.value);
        break;
    }
  }
  
  return (
    <>
      <input className="popup__input" value={email} type="email" name="email" placeholder="Email" onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'email')}/>
      <input className="popup__input" value={name} type="text" name="name" placeholder="Имя" onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'name')} />
      <input className="popup__input" value={password} type="password" name="password" placeholder="Пароль" onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'password')} />
      <input className="popup__input" value={passwordConfirmation} type="password" name="password-confirm" placeholder="Повторно пароль" onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, 'passwordConfirmation')} />
      { error && <ErrorMessage error={error} /> }
      <div className="popup__buttons-auth">
        <button type="submit" id="back-button" className="button button_light" onClick={handleRegBtnClick}>Вернуться</button>
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