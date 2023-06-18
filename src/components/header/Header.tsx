import { Link } from "react-router-dom";
import './Header.scss';
import { LoginBtn } from "./LoginBtn";

export function Header() {
  return (
    <div className="wrapper white header-wrapper">
      <header className="header-container" id="header-container">
        <div className="logo">
          <Link to="/" className="logo__link"><h1>RS Lang</h1></Link>
        </div>
        <div className="wrapper-burger">
          <nav className="main-nav" id="main-nav">
            <Link to="/textbook" className="main-nav__item">Учебник</Link>
            <Link to="/dictionary" className="main-nav__item">Словарь</Link>
            <Link to="/sprint" className="main-nav__item">Спринт</Link>
            <Link to="/audio" className="main-nav__item">Аудиовызов</Link>
            <Link to="/team" className="main-nav__item">O команде</Link>
            <Link to="/stats" className="main-nav__item">Статистика</Link>
          </nav>
        </div>
        <LoginBtn />
        <div className="burger"></div>
      </header>
    </div>
  );
}