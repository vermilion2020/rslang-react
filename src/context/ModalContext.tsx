import { createContext, useState } from 'react';

interface ModalContext {
  modalReg: boolean,
  modalAuth: boolean,
  setModalReg: (modalReg: boolean) => void,
  setModalAuth: (modalAuth: boolean) => void,
  close: () => void
}

export const ModalContext = createContext<ModalContext>({
  modalReg: false,
  modalAuth: false,
  setModalReg: () => {/**/},
  setModalAuth: () => {/**/},
  close: () => {/**/},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modalReg, setModalReg] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);
  const close = () => {
    setModalReg(false);
    setModalAuth(false);
  }

  return (
    <ModalContext.Provider value={{ modalReg, modalAuth, setModalReg, setModalAuth, close }}>
      { children }
    </ModalContext.Provider>
  );
}