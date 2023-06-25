import { createContext, useState } from 'react';

interface ModalContext {
  modalReg: boolean,
  modalAuth: boolean,
  error: string,
  setError: (error: string) => void,
  setModalReg: (modalReg: boolean) => void,
  setModalAuth: (modalAuth: boolean) => void,
  close: () => void
}

export const ModalContext = createContext<ModalContext>({
  modalReg: false,
  modalAuth: false,
  error: '',
  setError: () => {/**/},
  setModalReg: () => {/**/},
  setModalAuth: () => {/**/},
  close: () => {/**/},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modalReg, setModalReg] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);
  const [error, setError] = useState('');
  const close = () => {
    setModalReg(false);
    setModalAuth(false);
  }

  return (
    <ModalContext.Provider value={{ modalReg, modalAuth, setModalReg, setModalAuth, close, error, setError }}>
      { children }
    </ModalContext.Provider>
  );
}