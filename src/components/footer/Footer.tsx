import { Link } from "react-router-dom";
import './Footer.scss';

export function Footer() {
  return (
    <footer id="footer-container" className="footer-container">
    <p className="copyright">
        2023
    </p>
    <div className="github-link--wrapper">
      <Link className="github-link" to="https://github.com/halina-k" title="Halina Kulakova" target="_blank">
        <svg className="icon-git">
          <use xlinkHref="./icons/sprite-footer.svg#logo-git"></use>
        </svg>
        <p>HK</p>
      </Link>
      <Link className="github-link" to="https://github.com/googray" title="Roman Shatrov" target="_blank">
        <svg className="icon-git">
          <use xlinkHref="./icons/sprite-footer.svg#logo-git"></use>
        </svg>
      <p>RS</p>
      </Link>
      <Link className="github-link" to="https://github.com/vermilion2020" title="Militsa Tuseeva" target="_blank">
        <svg className="icon-git">
          <use xlinkHref="./icons/sprite-footer.svg#logo-git"></use>
        </svg>
      <p>TM</p>
      </Link>
    </div>
    <Link to="https://rs.school/js/" target="_blank" className="link-rs">
      <svg className="icon-rs">
        <use xlinkHref="./icons/sprite-footer.svg#logo-rs-school"></use>
      </svg>
    </Link></footer>
  );
}