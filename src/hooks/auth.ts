import { AxiosError } from  'axios';
import { useContext, useState } from 'react';
import axios from './axios-config';
import { MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from '../config-data';
import { RegistrationData } from '../models/Auth';
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  const { setAuthToken, setloggedIn, setUserName } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function userRegistration(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    setError('');

    if (password !== passwordConfirmation) {
      setError('Пароли должны совпадать!');
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError('Длина пароля должна быть не менее 8!');
      return;
    }

    if (name.length < MIN_NAME_LENGTH) {
      setError('Длина пароля должна быть не менее 3!');
      return;
    }

    try {
      setLoading(true);
      const data: RegistrationData = { email, name, password };
      const response = await axios.post('/users', data);
      if (response && response.data) {
        const response = await axios.post('/signin', { email, password });
        if (response.data['message'] === 'Authenticated')
        {
          window.localStorage.setItem('refreshToken', response.data['refreshToken']);
          setAuthToken(response.data['token']);
          setloggedIn(true);
          setUserName(name);
          setLoading(false);
        }
      } else {
        setError('Could not connect or receive data. Try later');
        setLoading(false);
      }
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
    
  }


  return { loading, error, userRegistration, setError };
}