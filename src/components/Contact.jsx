import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            <div>
              <a
                href="https://open.kakao.com/o/sPKynVof"
                target="_blank"
                rel="noreferrer"
              >
                KAKAO : Gazero(Frontend)
              </a>
            </div>
            <div>
              <a
                href="mailto:soongin95@naver.com"
                target="_blank"
                rel="noreferrer"
              >
                mail : SOONGIN95@NAVER.COM
              </a>
            </div>
          </div>
        </div>
        <div className="contact__lines bottom" aria-hidden="true">
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
  );
};

export default Contact;
