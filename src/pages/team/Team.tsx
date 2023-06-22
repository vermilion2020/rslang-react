import './Team.scss';

export function Team() {
  return (
    <section className="sec-4">
    <div className="wrapper-sec-4">
      <p className="sec-4-title">О команде</p>
      <hr />
      <div className="main-block-sec-4">
      <img className="photo" src="images/mila-photo.png" alt="mila"/>
        <div className="desc-sec-4">
          <p className="name">Мила</p>
          <p className="position">Team-leader, frontend developer</p>
          <p className="position-desc">Разработка игры Спринт, авторизации, статистики, доработка бэкенда.</p>
          <div className="git-block">
            <a href="https://github.com/vermilion2020" target="_blank" className="git-link">Github: vermilion2020</a>
          </div>
        </div>
        <div></div>
        <div className="line-team"><hr /></div>
        <img className="photo" src="images/roman-photo.png" alt="roman"/>
        <div className="desc-sec-4">
          <p className="name">Роман</p>
          <p className="position">Frontend developer</p>
          <p className="position-desc">Разработка игры Аудиовызов.</p>
          <div className="git-block">
            <a href="https://github.com/googray" target="_blank" className="git-link">Github: googray</a>
          </div>
        </div>
        <div></div>
        <div className="line-team"><hr /></div>
          <img className="photo" src="images/halina-photo.png" alt="halina"/>
          <div className="desc-sec-4">
            <p className="name">Галина</p>
            <p className="position">Frontend developer</p>
            <p className="position-desc">Разработка главной страницы, словаря и учебника.</p>
            <div className="git-block">
              <a href="https://github.com/halina-k" target="_blank" className="git-link">Github:  halina-k</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}