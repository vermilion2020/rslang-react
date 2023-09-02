import { AxiosError } from  'axios';
import { useContext, useEffect, useState } from 'react';
import axios from './axios-config';
import { AutenticationData, RefreshTokenResponse, RegistrationData, SignInResponse } from '../models/Auth';
import { AuthContext } from '../context/AuthContext';
import { ModalContext } from '../context/ModalContext';

export function useAuth() {
  const { setAuthToken, setloggedIn, setUserName } = useContext(AuthContext);
  const { close, setError } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);

  async function userRegistration(
    name: string,
    email: string,
    password: string
  ) {
    setError('');

    try {
      setLoading(true);
      const data: RegistrationData = { email, name, password };
      const response = await axios.post('/users', data);
      if (response && response.data) {
        userAuth(email, password);
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

  async function logout(
  ) {
    setAuthToken('');
    setloggedIn(false);
    setUserName('');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('expire');
  }

  async function autoLogin() {
    const refreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    
    if(refreshToken && userId && userName) {
      return await axios.get(`/users/${userId}/tokens`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        }
      })
      .then( response => {
        const responseData = <RefreshTokenResponse>response.data;
        localStorage.setItem('refreshToken', responseData.refreshToken);
        setAuthToken(responseData.token);
        localStorage.setItem('expire', `${Date.now() + 7200000}`);
        setUserName(userName);
        setloggedIn(true);
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        if (error.status === 403 || error.status === 401) {
          localStorage.setItem('refreshToken', '');
          localStorage.setItem('userId', '');
          localStorage.setItem('expire', '');
        }
      });
    }
  }

  async function userAuth(
    email: string,
    password: string
  ) {
    setError('');
    setLoading(true);
    const data: AutenticationData = { email, password };
    return await axios.post('/signin', data)
      .then(response => {
        const responseData = <SignInResponse>response.data;
        if (responseData.message === 'Authenticated') {
          localStorage.setItem('refreshToken', responseData.refreshToken);
          localStorage.setItem('expire', `${Date.now() + 7200000}`);
          localStorage.setItem('userId', responseData.userId);
          localStorage.setItem('userName', responseData.name);
          setAuthToken(responseData.token);
          setloggedIn(true);
          setUserName(responseData.name);
          setLoading(false);
          close();
        } 
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        setError(error.message);
        setLoading(false); 
      });
  }

  useEffect(() => {
    autoLogin()
  }, []);

  return { loading, userRegistration, setError, userAuth, logout };
}