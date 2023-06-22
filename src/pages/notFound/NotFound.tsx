import './NotFound.scss';

export function NotFound() {
  return (
    <section className="sec-not-found">
    <div className="not-found-container">

      <img className="icon-404" src="icons/404.svg" alt="title-img" />
      <p className="sec-not-found-title">Nothing is found</p>
      <p className="sec-not-found-desc">По вашему запросу ничего не найдено.</p>
    </div>
  </section>
  );
}