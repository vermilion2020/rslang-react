import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/auth";

export function LoginBtn() {
  const { setModalAuth, setError } = useContext(ModalContext);
  const { loggedIn, userName } = useContext(AuthContext);
  const { logout } = useAuth();

  const openAuthModal = () => {
    setModalAuth(true);
    setError('');
  }

  return (
    <>
    { !loggedIn && <div className="logged-out">
      <button className="button" id="log-in" onClick={openAuthModal}>Войти</button>
    </div> }
    { loggedIn && <div className="logged-out">
    <div className="user-name" title={userName}>{userName}</div>
      <button className="button" id="log-out" onClick={logout}>Выход</button>
    </div> }
    </>
    
  );
}