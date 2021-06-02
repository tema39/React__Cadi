
import "../banner/banner.scss";
import React from "react";


class Banner extends React.Component {

  render() {
    return(
      <div className="banner">
        <div className="banner__title-wrap">
        <h1 className="banner__title">Hi, It’s Théophile Seyrig</h1>
        <p className="banner__subtitle">Designer from Porto, Portugal</p>
        <a className="banner__link-works" href="?">Latest works</a>
        </div>
      </div>
    )
  }
}

export default Banner;

