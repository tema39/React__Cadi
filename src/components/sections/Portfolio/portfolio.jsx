import React from "react";
import "./portfolio.scss";
import leftArrow from "../../../images/leftArrow.svg";
import rightArrow from "../../../images/rightArrow.svg";
import imgPortfolio from "../../../images/PortfolioImages.jpg";

class SectionPortfolio extends React.Component {

  render() {
    return (
      <section className="section__portfolio">
        <h2 className="title__porfolio">Portfolio</h2>
        <h3 className="title__research">UX Research</h3>
        <div className="research__container">
          <div className="left__research-content">
            <p className="text__research">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum
              nibh nam odio cursus id. Diam massa semper a tincidunt cursus
              ultricies lectus eget urna.
            </p>
            <div className="buttons__block">
            <button className="button__left-arrow">
              <img className="icon__left-arrow" alt="" src={leftArrow} ></img>
            </button>
            <button className="button__right-arrow">
              <img className="icon__right-arrow" alt="" src={rightArrow}></img>
            </button>
          </div>
          </div>
          <div className="right__images-research">
            <img className="img__portfolio"  alt="" src={imgPortfolio }></img>
          </div>
          
      </div>
      </section>
    );
  }
}
export default SectionPortfolio;
