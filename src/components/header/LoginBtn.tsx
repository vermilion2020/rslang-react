import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

export function LoginBtn() {
  const { setModalAuth } = useContext(ModalContext);
  const { loggedIn, userName } = useContext(AuthContext);

  return (
    <>
    { !loggedIn && <div className="logged-out">
      <button className="button" id="log-in" onClick={() => {setModalAuth(true)}}>Войти</button>
    </div> }
    { loggedIn && <div className="logged-out">
    <div className="user-name" title={userName}>${userName}</div>
      <button className="button" id="log-out" onClick={() => {alert('Logout')}}>Выход</button>
    </div> }
    </>
    
  );
}