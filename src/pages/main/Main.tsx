import './Main.scss';

export function Main() {
  return (
    <>
      <section className="section-cover">
      <div className="cover-text">
        <p className="cover-rs">RS Lang</p>
        <p className="title">Изучай английский<br />с помощью игр
        </p>
        <p className="desc">С RS Lang ты сможешь изучать английский легко, используя только самые простые и эффективные инструменты, занимаясь не больше часа в день.</p>
        <div className="main-star-icons">
          <svg className="icon-star4">
            <use xlinkHref="./icons/sprite-mainpage.svg#star4"></use>
          </svg>
          <svg className="icon-star6">
            <use xlinkHref="./icons/sprite-mainpage.svg#star6"></use>
          </svg>
        </div>
    </div>
      <div className="cover-img">
        <div className="img-block">
          <img className="icon-mane-gr" src="icons/mane-gr.svg" alt="title-img" />
          <img className="icon-mane-adapt" src="icons/mane-adapt.svg" alt="title-img" />
          <img className="icon-mane-mobile" src="icons/mane-mobile.svg" alt="title-img" />
        </div>
      </div>
    </section>

    <section className="sec-1">
      <div className="wrapper-sec">
        <div className="sec-block">
          <p className="block-title">3,6k</p>
          <p className="block-desc">слов<br />в приложении</p>
        </div>
        <div className="sec-block">
          <p className="block-title">2</p>
          <p className="block-desc">крутейшие<br />игры</p>
        </div>
      <div className="sec-block">
          <p className="block-title">%</p>
          <p className="block-desc">отслеживание<br />прогресса</p>
      </div>
      <div className="sec-block">
          <svg className="icon-bookmark">
            <use xlinkHref="./icons/sprite-mainpage.svg#bookmark"></use>
          </svg>
          <p className="block-desc">персональные<br />метки к словам</p>
      </div>
      </div>
    </section>

    <section className="sec-2">
      <div className="wrapper-sec-2">
        <p className="sec-2-title">Возможности приложения</p>
        <hr />
        <div className="main-block-sec-2">
            <p className="title">Учебник</p>
            <div className="desc-sec-2">
              <p>Учебник содержит 6 разделов, в каждом разделе по 600 слов. С каждым следующим разделом ты изучаешь все более сложные слова. Раздел имеет несколько страниц и на каждой по 20 слов.</p>
              <p>Начинай постепенно! Просматривая страницы ты можешь перейти в словарь и узнать более подробную информацию.</p>
              <p>Учебник имеет 7-ой раздел, он доступен только для зарегистрированных пользователей. В этот раздел ты можешь заносить наиболее трудные слова.</p>
            </div>
            <a href="/#/textbook" className="link-arrow" id="link-textbook" data-id="textbook">
              <div className="arrow">
                <svg className="icon-arrow">
                  <use xlinkHref="./icons/sprite-mainpage.svg#arrow"></use>
                </svg>
              </div>
            </a>
            <div></div>
            <div className="line"><hr /></div>
            <p className="title">Словарь</p>
            <div className="desc-sec-2">
              <p>Словарь это продолжение учебника. В словаре ты можешь узнать применение слов в контексте, прослушать как оно звучит на английском языке.</p>
              <p>А также отметить слово как сложное или изученное.</p>
            </div>
            <a href="/#/dictionary" className="link-arrow" id="link-dictionary" data-id="dictionary">
              <div className="arrow">
                <svg className="icon-arrow">
                  <use xlinkHref="./icons/sprite-mainpage.svg#arrow"></use>
                </svg>
              </div>
            </a>
            <div></div>
            <div className="line"><hr /></div>
            <p className="title">Спринт</p>
            <div className="desc-sec-2">
              <p>Проверь и закрепи выученные слова. В игре тебе нужно угадать правильный перевод из предложенных вариантов</p>
              <p>И еще результаты своих побед и ошибок ты сможешь увидеть в учебнике и статистике.</p>
            </div>
            <a href="/#/sprint" className="link-arrow" id="link-sprint" data-id="sprint">
              <div className="arrow">
                <svg className="icon-arrow">
                  <use xlinkHref="./icons/sprite-mainpage.svg#arrow"></use>
                </svg>
              </div>
              </a>
              <div></div>
              <div className="line">      <hr /></div>
              <p className="title">Аудиовызов</p>
              <div className="desc-sec-2">
                <p>Учись реагировать быстро, моментально понимая английскую речь. Мы говорим - ты угадываешь.</p>
                <p>Как и в игре Спринт, результаты своих побед и ошибок ты сможешь увидеть в учебнике и статистике.</p>
                <p>Удачи!</p>
              </div>
              <a href="/#/audio" className="link-arrow" id="link-audio" data-id="audio">
                <div className="arrow">
                  <svg className="icon-arrow">
                    <use xlinkHref="./icons/sprite-mainpage.svg#arrow"></use>
                  </svg>
                </div>
              </a>
              <div></div>
              <div className="line">      <hr /></div>
        </div>
      </div>
    </section>
    <section className="sec-decor">
      <div className="wrapper-sec-decor">
        <div className="decor-1">
          <img className="icon-dec" src="icons/decor-1.svg" alt="decor"/>
        </div>
        <div className="decor-2">
          <img className="icon-dec" src="icons/decor-2.svg" alt="decor"/>
        </div>
        <div className="decor-3">
          <img className="icon-dec" src="icons/decor-3.svg" alt="decor"/>
        </div>
      </div>
    </section>
   </>
  );
}