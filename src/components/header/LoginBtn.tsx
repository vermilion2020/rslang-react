import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function LoginBtn() {
  const { setModalAuth } = useContext(ModalContext);

  return (
    <div className="logged-out">
      <button className="button" id="log-in" onClick={() => {setModalAuth(true)}}>Войти</button>
    </div>
  );
}