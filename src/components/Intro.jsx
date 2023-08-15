import React from "react";
import about from "../assets/img/danbi.jpeg";

const introText = {
  title: "front developer",
  desc: ["Fall seven times, stand up eight"],
  name: "im gayoung",
};

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="intro__inner ">
          <div className="text">
            <div className="text-desc">{introText.desc[0]}</div>
          </div>
          <h1 className="intro__title">{introText.title}</h1>

          <div className="intro__text ">
            <div className="container">
              <div className="img">
                <img src={about} alt="어바웃" />
              </div>
            </div>
          </div>
          <h1 className="intro__title">{introText.name}</h1>
          <div className="intro__lines bottom" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
