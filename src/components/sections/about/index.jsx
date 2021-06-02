
import "./about.scss";
import React from "react";

class SectionAbout extends React.Component {

  render() {
    return (
      <section>
        <div className="about__description-wrap">
          <h2 className="about__title">About</h2>
          <div className="about__description">
            Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero
            phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in
            rutrum augue. Pellentesque senectus risus consectetur et sed purus
            sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla
            egestas odio pharetra egestas aliquet mollis.
          </div>
          <div className="about__description">
            Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam
            penatibus aliquet tellus, in rutrum augue. Pellentesque senectus
            risus consectetur et sed purus sed. Consectetur adipiscing elit.
            Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet
            mollis. diam penatibus aliquet tellus, in rutrum augue.
            Pellentesque.
          </div>
        </div>
      </section>
    );
  }
}
export default SectionAbout;
