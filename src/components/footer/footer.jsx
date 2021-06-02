import React from "react";
import "../footer/footer.scss";
import topArow from "../../images/topArow.svg";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container__footer">
          <h2 className="footer__title">Get in Touch</h2>
          <div className="contact__wrap">
            <ul className="list__contact">
              <li className="list__contact-item">
                <a className="list__contact-link" href="www">
                  Dribbble
                </a>
              </li>
              <li className="list__contact-item">
                <a className="list__contact-link" href="ww">
                  Behance
                </a>
              </li>
              <li className="list__contact-item">
                <a className="list__contact-link" href="ww">
                  CodePen
                </a>
              </li>
              <li className="list__contact-item">
                <a className="list__contact-link" href="ww">
                  GitHub
                </a>
              </li>
              <li className="list__contact-item">
                <a className="list__contact-link" href="ww">
                  Medium
                </a>
              </li>
            </ul>
            <ul className="list__network">
              <li className="list__network-item">
                <a className="list__networ-link" href="ww">
                  LinkedIn
                </a>
              </li>
              <li className="list__network-item">
                <a className="list__networ-link" href="ww">
                  Facebook
                </a>
              </li>
              <li className="list__network-item">
                <a className="list__networ-link" href="ww">
                  Instagram
                </a>
              </li>
              <li className="list__network-item">
                <a className="list__networ-link" href="ww">
                  Twitter
                </a>
              </li>
            </ul>
            <div className="contact__number-emall">
              <p className="contact__text">seyrig@mailme.com</p>
              <p className="contact__number">+ 55 6645 665544</p>
            </div>
            <div className="footer__button-wrap">
              <button className="btn__arrow">
                <img className="icon__top-arrow" alt="" src={topArow}></img>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
