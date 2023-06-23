import { Link, NavLink } from "react-router-dom";
import './Header.scss';
import './Auth.scss';
import { LoginBtn } from "./LoginBtn";
import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";

interface navItem {
  path: string,
  name: string
}

export function Header() {
  
  const { setChapter } = useContext(UnitContext);
  const navItems: navItem[] = [
    {path: 'textbook', name: 'Учебник'},
    {path: 'dictionary', name: 'Словарь'},
    {path: 'sprint', name: 'Спринт'},
    {path: 'audio', name: 'Аудиовызов'},
    {path: 'team', name: 'O команде'},
    {path: 'stats', name: 'Статистика'},
  ];
  return (
    <div className="wrapper white header-wrapper">
      <header className="header-container" id="header-container">
        <div className="logo">
          <Link to="/" className="logo__link"><h1>RS Lang</h1></Link>
        </div>
        <div className="wrapper-burger">
          <nav className="main-nav" id="main-nav">
          {
            navItems
              .map(item => 
                <NavLink 
                  to={`/${item.path}`}
                  key={item.path}
                  className={({ isActive }) => isActive ? 'main-nav__item main-nav__item_active' : 'main-nav__item'}
                  onClick={() => setChapter(item.path)}
                >{item.name}</NavLink>)
          }
          </nav>
        </div>
        <LoginBtn />
        <div className="burger"></div>
      </header>
    </div>
  );
}