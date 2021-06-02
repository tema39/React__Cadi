import React from 'react'
import "../header/styles.scss"
import mobileIcon from "../../images/NavButton.svg"

class Header extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    navigations: [
      {
        text: "Home",
        link:"https://www.youtube.com/"
      },
      {
        text:"About",
        link: "https://www.youtube.com/"
      },
      {
        text: "Skills",
        link: "https://www.youtube.com/"
      },
      {
        text: "Portfolio",
        link: "https://www.youtube.com/"
      },
      {
        text: "Contact",
        link: "https://www.youtube.com/"
      },
    ]
  }
}
  render() {
    return(
      <header className="header">
        <div className="header__logo-wrap">
          <a className="header__logo" href="//#endregion">Portofolio</a>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            {this.state.navigations.map((el) => (
              <li className="nav__list-item">
              <a className="nav__list-item-link" href={el.link}>{el.text}</a>
            </li>
            )) }            
          </ul>
        </nav>
        <div className="mobile__btn-wrap">
          <button className="mobile__btn">
            <img className="mobile__btn-icon" alt="icon" src={mobileIcon}></img>
          </button>
        </div>

      </header>
    )
  }
}
export default Header;