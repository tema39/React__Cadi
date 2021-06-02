import "./skill.scss";
import human from "../../../images/human.jpg";
import React from "react";

class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.list = [
      {
        skill: "UX Research",
        tools: "Paper, Pen, Balsamiq",
        desing: "UI Design",
        toolsTwo: "Adobe PS, AI, XD, Figma, InVision",
        front: "Front-end Dev",
        toolsfree: "HTML, CSS, JS, Bootstrap, React",
      },
    ];
  }
  render() {
    return (
      <section className="skills">
        <div className="skills__wrap">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__inner">
            <div className="skills__left-block">
              <img className="skils__picture" alt="" src={human}></img>
            </div> 
            <div className="skills__right-block">
              <div className="cap__wrap">
                <h3 className="title__profile">Profile</h3>
                <p className="text__profile">
                  UI / UX Engineer, Front-end Developer
                </p>
              </div>
              <div className="scale__inner">
                {this.list.map((el) => (
                  <div>
                    <div className="scales__wrap">
                      <p className="scale__title-one">{el.skill}</p>
                      <div className="line__scales"></div>
                    </div>
                    <div className="tools__inner">
                      <p className="title__tools">Tools</p>
                      <p className="text__tools">{el.tools}</p>
                    </div>
                  </div>
                ))}
                {this.list.map((el) => (
                  <div>
                    <div className="scales__wrap">
                      <p className="scale__title">{el.desing}</p>
                      <div className="line__scales-two"></div>
                    </div>
                    <div className="tools__inner">
                      <p className="title__tools">Tools</p>
                      <p className="text__tools">{el.toolsTwo}</p>
                    </div>
                  </div>
                ))}
                {this.list.map((el) => (
                  <div>
                    <div className="scales__wrap">
                      <p className="scale__title-free">{el.front}</p>
                      <div className="line__scales-free"></div>
                    </div>
                    <div className="tools__inner">
                      <p className="title__tools">Tools</p>
                      <p className="text__tools">{el.toolsfree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionSkills;
