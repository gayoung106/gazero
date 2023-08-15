import React from "react";
import port01 from "../assets/img/netflix.png";
import wavve from "../assets/img/wavveview.gif";
import port02 from "../assets/img/wavve.png";
import port03 from "../assets/img/markm.png";
import port04 from "../assets/img/weatherapi.png";

const siteText = [
  {
    text: ["Building", "a website", "with vanilla JS and flask server"],
    title: "바닐라 JS와 flask 서버를 이용한 사이트 제작",
    code: "https://github.com/gayoung106/gazero-wavve-webpage",
    view: wavve,
    info: [
      "site coding",
      "production period : 10 days",
      "use stack: html5/css3, JavaScript, flask, mysql",
    ],
    img: port01,
    name: "wavve",
  },
  {
    text: ["make", "NETFLIX with", "react.js, firebase sever and movie API"],
    title: "리액트 JS와 파이어베이스, movie API 이용한 넷플릭스 웹 사이트 제작",
    code: "https://github.com/gayoung106/react-netflix-webpage",
    view: "https://netflix-gozero.web.app/",
    info: [
      "site coding",
      "production period : 5 days",
      "use stack : React JS, TailWind css, Firebase, movie API",
    ],
    img: port02,
    name: "netflix",
  },
  {
    text: ["Building", "order system with", "react.js and module.css"],
    title: "리액트를 이용한 패션플랫폼 주문 사이트 제작",
    code: "https://github.com/gayoung106/react-order",
    view: "https://gazero-cart.web.app/",
    info: [
      "site coding",
      "production period : 5 days",
      "use stack : React.js, module.css",
    ],
    img: port03,
    name: "markm",
  },
  {
    text: ["make", "responsive weather site with", "react.js"],
    title: "openweathermap.org api를 활용한 반응형 날씨 서비스",
    code: "https://github.com/gayoung106/weather-app",
    view: "https://weather-app-tau-tan.vercel.app/",
    info: [
      "site coding",
      "production period : 1 day",
      "use stack : React.js, openweathermap.org API",
    ],
    img: port04,
    name: "weather",
  },
];
const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>포트폴리오</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <img className="img" src={site.img} alt={site.name} />
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
