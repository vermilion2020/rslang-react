import { createContext, useState } from 'react';

interface ModalContext {
  modalReg: boolean,
  modalAuth: boolean,
  setModalReg: (modalReg: boolean) => void,
  setModalAuth: (modalAuth: boolean) => void
}

export const ModalContext = createContext<ModalContext>({
  modalReg: false,
  modalAuth: false,
  setModalReg: () => {/**/},
  setModalAuth: () => {/**/}
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modalReg, setModalReg] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);

  return (
    <ModalContext.Provider value={{ modalReg, modalAuth, setModalReg, setModalAuth }}>
      { children }
    </ModalContext.Provider>
  );
}